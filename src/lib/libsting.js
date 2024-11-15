import { db, storage } from './firebase';
import { collection, addDoc, updateDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

export async function createListing(listingData, imageFiles) {
    try {
        // Créer d'abord l'annonce sans les images
        const listingRef = await addDoc(collection(db, 'listings'), {
            ...listingData,
            imageUrls: [],
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
        });

        // Upload des images
        const imageUrls = await uploadListingImages(imageFiles, listingRef.id);

        // Mettre à jour l'annonce avec les URLs des images
        await updateDoc(listingRef, {
            imageUrls: imageUrls
        });

        return listingRef.id;
    } catch (error) {
        console.error('Erreur lors de la création de l\'annonce:', error);
        throw error;
    }
}

async function uploadListingImages(files, listingId) {
    const imageUrls = [];
    
    for (const file of files) {
        // Créer un nom de fichier unique
        const fileName = `${Date.now()}-${file.name}`;
        const storageRef = ref(storage, `listings/${listingId}/${fileName}`);
        
        // Upload du fichier
        await uploadBytes(storageRef, file);
        
        // Récupérer l'URL de téléchargement
        const url = await getDownloadURL(storageRef);
        imageUrls.push(url);
    }
    
    return imageUrls;
}

export async function deleteListing(listingId, imageUrls) {
    try {
        // Supprimer les images du storage
        for (const url of imageUrls) {
            const storageRef = ref(storage, url);
            await deleteObject(storageRef);
        }

        // Supprimer l'annonce de Firestore
        await deleteDoc(doc(db, 'listings', listingId));
    } catch (error) {
        console.error('Erreur lors de la suppression de l\'annonce:', error);
        throw error;
    }
}

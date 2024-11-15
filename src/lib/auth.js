// src/lib/auth.js
import { auth } from './firebase';
import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut,
    sendPasswordResetEmail,
    updateProfile,
    onAuthStateChanged
} from 'firebase/auth';
import { writable } from 'svelte/store';

// Store pour suivre l'état de l'utilisateur
export const user = writable(null);
export const authLoading = writable(true);
export const authError = writable(null);

// Initialisation de l'écouteur d'authentification
export function initAuthListener() {
    onAuthStateChanged(auth, (currentUser) => {
        user.set(currentUser);
        authLoading.set(false);
    }, (error) => {
        console.error("Erreur de l'écouteur d'auth:", error);
        authError.set(error);
        authLoading.set(false);
    });
}

// Inscription
export async function signup(email, password, displayName = '') {
    authError.set(null);
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        if (displayName) {
            await updateProfile(userCredential.user, { displayName });
        }
        user.set(userCredential.user);
        return {
            success: true,
            message: 'Inscription réussie'
        };
    } catch (error) {
        let errorMessage = 'Erreur lors de l\'inscription';
        switch (error.code) {
            case 'auth/email-already-in-use':
                errorMessage = 'Cette adresse email est déjà utilisée';
                break;
            case 'auth/invalid-email':
                errorMessage = 'Adresse email invalide';
                break;
            case 'auth/weak-password':
                errorMessage = 'Le mot de passe doit contenir au moins 6 caractères';
                break;
        }
        authError.set(errorMessage);
        throw { message: errorMessage };
    }
}

// Connexion
export async function login(email, password) {
    authError.set(null);
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        user.set(userCredential.user);
        return {
            success: true,
            message: 'Connexion réussie'
        };
    } catch (error) {
        let errorMessage = 'Erreur lors de la connexion';
        switch (error.code) {
            case 'auth/user-not-found':
                errorMessage = 'Utilisateur non trouvé';
                break;
            case 'auth/wrong-password':
                errorMessage = 'Mot de passe incorrect';
                break;
            case 'auth/invalid-email':
                errorMessage = 'Adresse email invalide';
                break;
        }
        authError.set(errorMessage);
        throw { message: errorMessage };
    }
}

// Déconnexion
export async function logout() {
    authError.set(null);
    try {
        await signOut(auth);
        user.set(null);
        return {
            success: true,
            message: 'Déconnexion réussie'
        };
    } catch (error) {
        const errorMessage = 'Erreur lors de la déconnexion';
        authError.set(errorMessage);
        throw { message: errorMessage };
    }
}

// Réinitialisation du mot de passe
export async function resetPassword(email) {
    authError.set(null);
    try {
        await sendPasswordResetEmail(auth, email);
        return {
            success: true,
            message: 'Email de réinitialisation envoyé'
        };
    } catch (error) {
        let errorMessage = 'Erreur lors de la réinitialisation du mot de passe';
        switch (error.code) {
            case 'auth/user-not-found':
                errorMessage = 'Aucun compte associé à cette adresse email';
                break;
            case 'auth/invalid-email':
                errorMessage = 'Adresse email invalide';
                break;
        }
        authError.set(errorMessage);
        throw { message: errorMessage };
    }
}

// Mise à jour du profil utilisateur
export async function updateUserProfile(displayName, photoURL) {
    authError.set(null);
    try {
        await updateProfile(auth.currentUser, {
            displayName,
            photoURL
        });
        user.set(auth.currentUser);
        return {
            success: true,
            message: 'Profil mis à jour avec succès'
        };
    } catch (error) {
        const errorMessage = 'Erreur lors de la mise à jour du profil';
        authError.set(errorMessage);
        throw { message: errorMessage };
    }
}

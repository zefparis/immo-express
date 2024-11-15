<script>
    import { auth } from '$lib/firebase';
    import { createListing } from '$lib/listings';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    
    let formData = {
        title: '',
        description: '',
        price: '',
        location: '',
        type: 'rent',
        surface: '',
        rooms: '',
        userId: ''
    };

    let imageFiles = [];
    let isLoading = false;
    let error = null;

    onMount(() => {
        if (!auth.currentUser) {
            goto('/login');
        }
        formData.userId = auth.currentUser?.uid;
    });

    function handleFileInput(event) {
        const files = Array.from(event.target.files);
        
        // Validation des fichiers
        const invalidFiles = files.filter(file => !file.type.startsWith('image/'));
        if (invalidFiles.length > 0) {
            error = 'Seules les images sont acceptées';
            return;
        }

        // Validation de la taille
        const oversizedFiles = files.filter(file => file.size > 5 * 1024 * 1024);
        if (oversizedFiles.length > 0) {
            error = 'Les images ne doivent pas dépasser 5MB';
            return;
        }

        imageFiles = files;
        error = null;
    }

    async function handleSubmit() {
        try {
            isLoading = true;
            error = null;
            
            // Validations
            if (!formData.title || !formData.price || !formData.location) {
                throw new Error('Veuillez remplir tous les champs obligatoires');
            }

            if (imageFiles.length === 0) {
                throw new Error('Veuillez ajouter au moins une image');
            }

            // Création de l'annonce
            await createListing(formData, imageFiles);
            
            // Redirection vers la page d'accueil
            goto('/');
        } catch (err) {
            error = err.message;
        } finally {
            isLoading = false;
        }
    }
</script>

<!-- Le reste du template reste le même, mais modifiez la partie input file -->
<div class="mb-4">
    <label class="block mb-2">Photos *</label>
    <input 
        type="file" 
        multiple 
        accept="image/*"
        on:change={handleFileInput}
        class="w-full p-2 border rounded"
        required
    >
    <small class="text-gray-500">Maximum 5MB par image. Formats acceptés : JPG, PNG, GIF</small>
</div>

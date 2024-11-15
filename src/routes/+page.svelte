<script>
    import ListingCard from '../lib/components/ListingCard.svelte';
    import { user } from '$lib/stores/user';
    import { goto } from '$app/navigation';

    function handlePostListing() {
        goto('/post-listing');
    }

    let featuredListings = [
        { id: 1, title: "Maison au bord de la mer", price: "450 000 €", description: "Magnifique maison avec vue sur l'océan." },
        { id: 2, title: "Appartement en centre-ville", price: "200 000 €", description: "Idéal pour les amoureux de la ville." }
    ];
</script>

<section class="featured-section">
    <div class="welcome">
        <h1>Bienvenue sur Immo Express</h1>
        <p class="intro-text">Découvrez les meilleures annonces immobilières.</p>
        
        <!-- Ajout du bouton ici -->
        {#if $user}
            <button 
                on:click={handlePostListing}
                class="btn btn-primary btn-lg mt-3"
            >
                Déposer une annonce
            </button>
        {/if}
    </div>

    <h2 class="section-title">Annonces en vedette</h2>
    <div class="featured-listings">
        {#each featuredListings as listing}
            <ListingCard {listing} />
        {/each}
    </div>
</section>

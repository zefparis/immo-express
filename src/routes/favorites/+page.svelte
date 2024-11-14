<script>
    import ListingCard from '../../lib/components/ListingCard.svelte';

    // Exemple de favoris de l'utilisateur - remplacer par un appel API réel
    let favorites = [
        { id: 3, title: "Villa avec jardin", price: "500 000 €", description: "Grande villa avec un jardin spacieux." },
        { id: 4, title: "Studio cosy", price: "120 000 €", description: "Parfait pour un pied-à-terre." }
    ];
</script>

<section>
    <h1>Mes favoris</h1>

    {#if favorites.length > 0}
        <div class="favorites-list">
            {#each favorites as listing}
                <ListingCard {listing} />
            {/each}
        </div>
    {:else}
        <p>Vous n'avez encore ajouté aucune annonce à vos favoris.</p>
    {/if}
</section>

<style>
    .favorites-list {
        display: grid;
        gap: 1rem;
    }
</style>

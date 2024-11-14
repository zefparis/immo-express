<script>
    import ListingCard from '../../lib/components/ListingCard.svelte';

    let query = "";
    let searchResults = [];

    const handleSearch = () => {
        // Exemple de recherche - Remplacer par la logique réelle
        searchResults = [
            { id: 1, title: "Maison avec vue", price: "300 000 €", description: "Belle maison avec une vue magnifique." }
        ];
    };
</script>

<section>
    <h1>Recherche d'Annonces</h1>
    <input type="text" placeholder="Recherchez..." bind:value={query} on:input={handleSearch} />
    <div class="results">
        {#if searchResults.length > 0}
            {#each searchResults as result}
                <ListingCard listing={result} />

            {/each}
        {:else}
            <p>Aucun résultat trouvé pour "{query}".</p>
        {/if}
    </div>
</section>

<style>
    .results {
        display: grid;
        gap: 1rem;
    }
</style>

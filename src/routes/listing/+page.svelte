<script>
    import ListingCard from '../../lib/components/ListingCard.svelte';

    let listings = [
        { id: 1, title: "Maison au bord de la mer", price: 450000, description: "Vue sur l'océan.", type: "Maison" },
        { id: 2, title: "Appartement en centre-ville", price: 200000, description: "Idéalement situé.", type: "Appartement" },
        { id: 3, title: "Villa avec piscine", price: 600000, description: "Piscine et jardin.", type: "Villa" }
    ];

    let sortBy = 'price'; // Critère de tri : prix
    let filterBy = ''; // Filtre : type de bien

    // Tri des annonces par prix
    function sortListings() {
        listings = listings.sort((a, b) => a[sortBy] - b[sortBy]);
    }

    // Filtrage des annonces par type
    function filterListings() {
        return listings.filter(listing => filterBy ? listing.type === filterBy : true);
    }
</script>

<section>
    <h1>Liste des Annonces</h1>
    
    <!-- Options de filtre et tri -->
    <div class="filters">
        <label>
            Trier par :
            <select bind:value={sortBy} on:change={sortListings}>
                <option value="price">Prix</option>
            </select>
        </label>

        <label>
            Filtrer par type :
            <select bind:value={filterBy}>
                <option value="">Tous</option>
                <option value="Maison">Maison</option>
                <option value="Appartement">Appartement</option>
                <option value="Villa">Villa</option>
            </select>
        </label>
    </div>

    <div class="listings">
        {#each filterListings() as listing}
            <ListingCard {listing} />
        {/each}
    </div>
</section>

<style>
    .filters {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
    }
    .listings {
        display: grid;
        gap: 1rem;
    }
</style>

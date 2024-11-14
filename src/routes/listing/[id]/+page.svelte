<script context="module">
    export async function load({ params }) {
        const id = params.id;
        // Charger les données pour l'annonce spécifique (ex: via Firebase ou une API REST)
        const listingData = await fetchListingData(id);
        return {
            props: { listingData }
        };
    }

    async function fetchListingData(id) {
        // Remplacer par un appel à l'API réelle
        return {
            id,
            title: "Titre de l'annonce",
            description: "Description de l'annonce",
            price: "1000 €"
        };
    }
</script>

<script>
    export let listingData;
</script>

<section>
    <h1>{listingData.title}</h1>
    <p>{listingData.description}</p>
    <p>Prix: {listingData.price}</p>
</section>

<style>
    /* Ajouter le style de la page de détail de l'annonce ici */
</style>

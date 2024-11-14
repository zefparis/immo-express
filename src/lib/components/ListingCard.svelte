<script>
    export let listing;
</script>

<article class="listing-card">
    <h2 class="listing-title">{listing.title}</h2>
    <p class="listing-description">{listing.description}</p>
    <p class="listing-price"><strong>Prix :</strong> {listing.price}</p>
</article>


<style>
    .listing-card {
        padding: 1.5rem;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        background-color: #ffffff;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    /* Effet de survol */
    .listing-card:hover {
        transform: translateY(-5px);
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
    }

    .listing-title {
        font-size: 1.5rem;
        font-weight: bold;
        color: #00796b;
        margin-bottom: 0.5rem;
    }

    .listing-description {
        font-size: 1rem;
        color: #555;
        line-height: 1.5;
        margin-bottom: 1rem;
    }

    .listing-price {
        font-size: 1.2rem;
        font-weight: bold;
        color: #d32f2f;
    }
</style>


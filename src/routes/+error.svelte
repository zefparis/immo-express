<script>
    export let status;
    export let error;
</script>

<section class="error-page">
    <h1>{status === 404 ? "Page non trouvée" : "Erreur"}</h1>
    <p>{status === 404 ? "Désolé, la page que vous recherchez n'existe pas." : error?.message || "Une erreur est survenue."}</p>
    <a href="/" class="btn btn-primary">Retour à l'accueil</a>
</section>

<style>
    .error-page {
        text-align: center;
        padding: 2rem;
        background-color: #f8f9fa;
    }
</style>

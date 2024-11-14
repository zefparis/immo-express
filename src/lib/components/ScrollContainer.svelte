<script>
    import ScrollContainer from './ScrollContainer.svelte';
</script>

<ScrollContainer>
    <a href="#" class="nav-link">Accueil</a>
    <a href="#" class="nav-link">Services</a>
    <a href="#" class="nav-link">Contact</a>
    <!-- Ajoutez vos liens ici -->
</ScrollContainer>

<style>
    .nav-link {
        padding: 0.5rem 1rem;
        text-decoration: none;
        color: var(--primary-color);
        background: white;
        border-radius: 1rem;
        border: 1px solid var(--primary-color);
    }
</style>

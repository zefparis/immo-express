<!-- src/routes/+layout.svelte -->
<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { goto } from '$app/navigation';

    let searchQuery = "";

    const handleSearch = (event) => {
        event?.preventDefault();
        if (searchQuery.trim()) {
            goto(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
        }
    };
</script>

<div class="app-container">
    <Header />
    
    <section class="global-search py-3 bg-light" role="search">
        <div class="container d-flex justify-content-center">
            <form on:submit|preventDefault={handleSearch} class="d-flex w-50">
                <input 
                    type="search" 
                    placeholder="Recherchez une annonce..." 
                    class="form-control me-2"
                    aria-label="Rechercher une annonce"
                    bind:value={searchQuery}
                />
                <button type="submit" class="btn btn-primary">
                    Rechercher
                </button>
            </form>
        </div>
    </section>

    <main class="main-content">
        <slot />
    </main>

    <Footer />
</div>

<style>
    :global(body) {
        margin: 0;
        min-height: 100vh;
    }

    .app-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .main-content {
        flex: 1;
        padding: 2rem 0;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }

    .global-search {
        border-bottom: 1px solid #ddd;
        position: sticky;
        top: 76px; /* Ajusté pour tenir compte du header fixe */
        z-index: 1000;
        background-color: white;
    }

    /* Si votre navbar est fixed */
    :global(body) {
        padding-top: 76px;
    }
</style>

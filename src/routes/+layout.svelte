<!-- src/routes/+layout.svelte -->
<script>
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import { goto } from '$app/navigation';

    let searchQuery = "";
    let isSearching = false;

    const handleSearch = async (event) => {
        event?.preventDefault();
        if (searchQuery.trim()) {
            isSearching = true;
            try {
                await goto(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
            } finally {
                isSearching = false;
            }
        }
    };
</script>

<div class="app-container">
    <Header />
    
    <section class="global-search py-3 bg-light" role="search">
        <div class="container">
            <form on:submit={handleSearch} class="search-form">
                <div class="input-group">
                    <input 
                        type="search" 
                        placeholder="Recherchez une annonce..." 
                        class="form-control"
                        aria-label="Rechercher une annonce"
                        bind:value={searchQuery}
                        disabled={isSearching}
                    />
                    <button 
                        type="submit" 
                        class="btn btn-primary"
                        disabled={isSearching || !searchQuery.trim()}
                    >
                        {#if isSearching}
                        <span class="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                        {/if}
                        Rechercher
                    </button>
                </div>
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
        padding-top: 76px;
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
        top: 76px;
        z-index: 1000;
        background-color: white;
    }

    .search-form {
        max-width: 600px;
        margin: 0 auto;
    }

    @media (max-width: 768px) {
        .search-form {
            padding: 0 1rem;
        }

        .main-content {
            padding: 1rem;
        }
    }
</style>

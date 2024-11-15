<script>
    import { user } from '$lib/stores/user';
    import { onDestroy } from 'svelte';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';

    let isLoggedIn = false;
    let isMenuOpen = false;

    const unsubscribe = user.subscribe(value => {
        isLoggedIn = value !== null;
    });

    onDestroy(unsubscribe);

    const logout = async () => {
        try {
            user.set(null);
            await goto('/');
        } catch (error) {
            console.error('Erreur lors de la déconnexion:', error);
        }
    };

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
    };
</script>

<nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
        <a class="navbar-brand" href="/">
            <i class="fas fa-home me-2"></i>
            <span>Immo Express</span>
        </a>

        <button
            class="navbar-toggler"
            type="button"
            on:click={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse {isMenuOpen ? 'show' : ''}" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a 
                        class="nav-link {$page.url.pathname === '/listing' ? 'active' : ''}" 
                        href="/listing"
                    >
                        Annonces
                    </a>
                </li>
                <li class="nav-item">
                    <a 
                        class="nav-link {$page.url.pathname === '/search' ? 'active' : ''}" 
                        href="/search"
                    >
                        Recherche
                    </a>
                </li>
                <li class="nav-item">
                    <a 
                        class="nav-link {$page.url.pathname === '/favorites' ? 'active' : ''}" 
                        href="/favorites"
                    >
                        Favoris
                    </a>
                </li>

                {#if isLoggedIn}
                    <li class="nav-item">
                        <button 
                            class="btn btn-outline-danger ms-lg-2" 
                            on:click={logout}
                        >
                            <i class="fas fa-sign-out-alt me-1"></i>
                            Déconnexion
                        </button>
                    </li>
                {:else}
                    <li class="nav-item">
                        <a 
                            class="nav-link {$page.url.pathname === '/login' ? 'active' : ''}" 
                            href="/login"
                        >
                            Connexion
                        </a>
                    </li>
                    <li class="nav-item">
                        <a 
                            class="btn btn-primary ms-lg-2" 
                            href="/signup"
                        >
                            Inscription
                        </a>
                    </li>
                {/if}
            </ul>
        </div>
    </div>
</nav>

<style>
    .navbar {
        background-color: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(5px);
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .navbar-brand {
        color: #007bff;
        font-size: 1.5rem;
        font-weight: 700;
        transition: color 0.3s ease;
    }

    .navbar-brand:hover {
        color: #0056b3;
    }

    .nav-link {
        color: #333;
        font-weight: 500;
        padding: 0.5rem 1rem;
        transition: color 0.3s ease;
    }

    .nav-link:hover, .nav-link.active {
        color: #007bff;
    }

    .btn {
        padding: 0.5rem 1.5rem;
        transition: all 0.3s ease;
    }

    @media (max-width: 991px) {
        .navbar-collapse {
            padding: 1rem 0;
        }

        .navbar-nav {
            gap: 0.5rem;
            text-align: center;
        }

        .btn {
            width: 100%;
            margin: 0.5rem 0;
        }
    }
</style>
import { user } from '$lib/stores/user.js';

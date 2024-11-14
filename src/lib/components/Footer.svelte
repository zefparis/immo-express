<footer class="footer">
    <div class="container">
        <div class="row">
            <!-- Colonne principale -->
            <div class="col-12 col-md-4 mb-3 mb-md-0">
                <h5 class="footer-brand">
                    <i class="fas fa-home me-2"></i>
                    Immo Express
                </h5>
                <p class="text-muted">
                    Votre partenaire de confiance pour l'immobilier
                </p>
            </div>

            <!-- Liens rapides -->
            <div class="col-12 col-md-4 mb-3 mb-md-0">
                <h6 class="footer-title">Liens rapides</h6>
                <ul class="list-unstyled">
                    <li><a href="/listing">Annonces</a></li>
                    <li><a href="/search">Recherche</a></li>
                    <li><a href="/favorites">Favoris</a></li>
                </ul>
            </div>

            <!-- Contact -->
            <div class="col-12 col-md-4">
                <h6 class="footer-title">Contact</h6>
                <ul class="list-unstyled">
                    <li><a href="mailto:contact@immoexpress.fr">contact@immoexpress.fr</a></li>
                    <li><a href="tel:+33123456789">01 23 45 67 89</a></li>
                </ul>
            </div>
        </div>

        <!-- Copyright -->
        <div class="footer-bottom">
            <p class="mb-0">
                &copy; {new Date().getFullYear()} Immo Express. Tous droits réservés.
            </p>
        </div>
    </div>
</footer>

<style>
    .footer {
        background-color: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(5px);
        border-top: 1px solid #ddd;
        padding: 2rem 0 1rem;
        margin-top: auto;
    }

    .footer-brand {
        color: #007bff;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    .footer-title {
        color: #333;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    .footer a {
        color: #666;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .footer a:hover {
        color: #007bff;
    }

    .footer-bottom {
        border-top: 1px solid #eee;
        margin-top: 2rem;
        padding-top: 1rem;
        text-align: center;
        color: #666;
    }

    .list-unstyled li {
        margin-bottom: 0.5rem;
    }

    @media (max-width: 767px) {
        .footer {
            text-align: center;
        }

        .footer-title {
            margin-top: 1.5rem;
        }
    }
</style>


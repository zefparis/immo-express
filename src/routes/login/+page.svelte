<script>
    let email = "";
    let password = "";

    const handleLogin = () => {
        // Ajouter la logique de connexion ici, par exemple en utilisant Firebase Auth
        console.log("Tentative de connexion avec :", email, password);
    };
</script>

<section>
    <h1>Connexion</h1>
    <form on:submit|preventDefault={handleLogin}>
        <label>
            Email:
            <input type="email" bind:value={email} required />
        </label>
        <label>
            Mot de passe:
            <input type="password" bind:value={password} required />
        </label>
        <button type="submit">Se connecter</button>
    </form>
</section>

<style>
    /* Ajouter le style de la page de connexion ici */
</style>

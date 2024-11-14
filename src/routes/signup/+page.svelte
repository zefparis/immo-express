<script>
    let name = "";
    let email = "";
    let password = "";
    let confirmPassword = "";

    const handleSignup = () => {
        if (password === confirmPassword) {
            // Logique d'inscription (par exemple, API ou Firebase)
            console.log("Inscription réussie :", { name, email, password });
        } else {
            console.log("Les mots de passe ne correspondent pas.");
        }
    };
</script>

<section class="container my-5">
    <h1 class="text-center mb-4">Inscription</h1>
    <form class="card p-4 shadow-lg" on:submit|preventDefault={handleSignup}>
        <div class="mb-3">
            <label for="name" class="form-label">Nom</label>
            <input type="text" id="name" class="form-control" bind:value={name} required />
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" id="email" class="form-control" bind:value={email} required />
        </div>
        <div class="mb-3">
            <label for="password" class="form-label">Mot de passe</label>
            <input type="password" id="password" class="form-control" bind:value={password} required />
        </div>
        <div class="mb-3">
            <label for="confirmPassword" class="form-label">Confirmer le mot de passe</label>
            <input type="password" id="confirmPassword" class="form-control" bind:value={confirmPassword} required />
        </div>
        <button type="submit" class="btn btn-primary w-100">S'inscrire</button>
    </form>
</section>

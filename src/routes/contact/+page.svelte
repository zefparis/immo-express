<script>
    let name = "";
    let email = "";
    let message = "";

    const handleSubmit = () => {
        // Logique d'envoi du formulaire
        console.log("Message envoyé :", { name, email, message });
    };
</script>

<section>
    <h1>Contactez-nous</h1>
    <form on:submit|preventDefault={handleSubmit}>
        <label>
            Nom:
            <input type="text" bind:value={name} required />
        </label>
        <label>
            Email:
            <input type="email" bind:value={email} required />
        </label>
        <label>
            Message:
            <textarea bind:value={message} required></textarea>
        </label>
        <button type="submit">Envoyer</button>
    </form>
</section>

<style>
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>

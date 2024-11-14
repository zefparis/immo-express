<script>
    export let message = "";
    export let type = "success"; // Peut être "success" ou "error"
</script>

{#if message}
    <div class="notification {type}">
        {message}
    </div>
{/if}

<style>
    .notification {
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 5px;
        color: white;
    }
    .success {
        background-color: #4caf50;
    }
    .error {
        background-color: #f44336;
    }
</style>

<script>
    export let message = "Êtes-vous sûr ?";
    export let onConfirm;
    export let onCancel;

    const handleConfirm = () => {
        onConfirm();
    };

    const handleCancel = () => {
        onCancel();
    };
</script>

<div class="confirmation-overlay">
    <div class="confirmation-box">
        <p>{message}</p>
        <button on:click={handleConfirm}>Confirmer</button>
        <button on:click={handleCancel}>Annuler</button>
    </div>
</div>

<style>
    .confirmation-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .confirmation-box {
        background: white;
        padding: 2rem;
        border-radius: 8px;
        text-align: center;
    }
</style>

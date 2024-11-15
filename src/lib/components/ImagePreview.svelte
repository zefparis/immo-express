<script>
    export let files = [];
    
    function getPreviewUrl(file) {
        return URL.createObjectURL(file);
    }
</script>

<div class="grid grid-cols-3 gap-4 mt-4">
    {#each files as file}
        <div class="relative">
            <img 
                src={getPreviewUrl(file)} 
                alt="Prévisualisation" 
                class="w-full h-32 object-cover rounded"
            />
        </div>
    {/each}
</div>

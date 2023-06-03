<script>
    export let data

    const {organization} = data
</script>
    
<section>
    <h2>{organization.name}</h2>
    <h3>Beschrijving</h3>
    {#if organization.description}
        {@html organization.description.html}
    {/if}
    
</section>

<style>
    section {
        padding-left: .5rem;
    }
    section h2 {
        margin:0 !important
    }
</style>
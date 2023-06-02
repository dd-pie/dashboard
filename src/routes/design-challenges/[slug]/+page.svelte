<script>
    export let data

    const {project} = data
</script>
    
<section>
    <h2>{project.title}</h2>

    {#if project.visual}
    <img src="{project.visual.url}" alt="{project.title}">
    {/if}

    <h3>Opdrachtgever</h3>
    {#if project.organization}
        <span>{project.organization.name}</span>
    {:else if project.productOwners.length > 0} 
        <span>
            {project.productOwners[0].firstName}
            {project.productOwners[0]?.prefix || " "}
            {project.productOwners[0]?.surname || " "}
        </span>
    {/if}

    <h3>Product Owners</h3>
    {#if project.productOwners.length > 0} 
        <span>
            {project.productOwners[0].firstName}
            {project.productOwners[0]?.prefix || " "}
            {project.productOwners[0].surname || " "}
        </span>
    {/if}

    <h3>Account managers </h3>
    {#if project.accountManagers.length > 0} 
        <span>
            {project.accountManagers[0].firstName}
            {project.accountManagers[0]?.prefix || " "}
            {project.accountManagers[0].surname || " "}
        </span>
    {/if}

    <h3>Design briefing</h3>
    {#if project.briefing}
    {@html project.briefing.html}
    {/if}

    <h3>Onderwijsprogramma's</h3>
    {#if project.programmes.length > 0}
    <ul>
    {#each project.programmes as programme}
        <li><a href="/">{programme.name} <em class={programme.course.abbreviation}>{programme.course.abbreviation}</em></a></li>
    {/each}
    </ul>
    {/if}
</section>

<style>
    section h2 {
        margin:0 !important
    }
    h3 {
        margin-bottom: .5rem;
    }
    img {
        display:block;
        margin:1rem 0;
        border:1px solid #333
    }
</style>
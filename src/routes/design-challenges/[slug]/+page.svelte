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
    {#if project.organizations.length > 0}
        <span>{project.organizations[0].name}</span>
    {:else if project.productOwners.length > 0} 
        <span>
            {project.productOwners[0].firstName}
            {project.productOwners[0]?.prefix || " "}
            {project.productOwners[0]?.surname || " "}
        </span>
    {/if}

    {#if project.productOwners.length > 0} 
    <h3>Product Owners</h3>
        <span>
            {project.productOwners[0].firstName}
            {project.productOwners[0]?.prefix || " "}
            {project.productOwners[0].surname || " "}
        </span>
    {/if}

    {#if project.accountManagers.length > 0} 
    <h3>Account managers </h3>
    <span>
        {project.accountManagers[0].firstName}
        {project.accountManagers[0]?.prefix || " "}
        {project.accountManagers[0].surname || " "}
    </span>
    {/if}

    {#if project.briefing}
    <h3>Design challenge</h3>
    {@html project.briefing.html}
    {/if}

    {#if project.programmes.length > 0}
    <h3>Onderwijsprogramma's</h3>
    <ul>
    {#each project.programmes as programme}
        <li><a href="/">{programme.name} <em class={programme.course.abbreviation}>{programme.course.abbreviation}</em></a></li>
    {/each}
    </ul>
    {/if}
</section>

<style>
    section {
        padding-left: .5rem;
    }
    section h2 {
        margin:0 !important
    }
    img {
        display:block;
        margin:1rem 0;
        border:1px solid #333;
        width:66vw;
        height:44vw
    }
    
</style>
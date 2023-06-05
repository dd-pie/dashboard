<script>    
    export let data
</script>

<section>     
    <h2>Design Challenges</h2>

    <ul>
        {#each data.projects as project}
            <li>
                <a href="design-challenges/{project.slug}">
                    <strong>{project.title}</strong>

                    <div>
                        {#if project.organizations.length > 0}
                            <span>{project.organizations[0].name}</span>
                        {:else if project.productOwners.length > 0} 
                            <span>
                                {#if project.productOwners[0].firstName}{project.productOwners[0].firstName}{/if}
                                {#if project.productOwners[0].prefix}{project.productOwners[0].prefix}{/if} 
                                {#if project.productOwners[0].surname}{project.productOwners[0].surname}{/if}
                            </span>
                        {/if}
                    </div>
                    
                </a>
            </li>
        {/each}
    </ul>
</section> 

<style>

</style>



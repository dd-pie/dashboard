<script>
    export let data

    console.log(data.pendingProjects)
</script>

<section>
    <h2>Nieuwe projecten</h2>

    <ul>
        {#each data.activeProjects.projects as project}
                <li>
                    <a href="projecten/{project.slug}">
                        <strong>{project.title}</strong>
                        <div>
                            {#if project.organization}
                                <span>{project.organization.name}</span>

                            {:else if project.productOwners.length > 0} 
                                <span>
                                    {#if project.productOwners[0].firstName}{project.productOwners[0].firstName}{/if}
                                    {#if project.productOwners[0].prefix}{project.productOwners[0].prefix}{/if} 
                                    {#if project.productOwners[0].surname}{project.productOwners[0].surname}{/if}
                                </span>
                            {/if}

                            {#if project.courses.length > 0}
                            
                                {#each project.courses as course}
                                    {#if course.abbreviation.length > 0}
                                        <em class={course.abbreviation}>{course.abbreviation}</em>
                                    {/if}
                                {/each}
                            {/if}
                        </div>
                    </a>
                </li>
        {/each}
    </ul>
    <a href="/projecten">Bekijk alle projecten</a>
</section>

<section>     
    <h2>Nieuwe design challenges</h2>

    <ul>
        {#each data.pendingProjects.projects as project}
            <li>
                <a href="design-challenges/{project.slug}">
                    <strong>{project.title}</strong>

                    <div>
                        {#if project.organization}
                            <span>{project.organization.name}</span>
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
    <a href="/design-challenges">Bekijk alle design-challenges</a>
</section> 

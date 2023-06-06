<script>
    export let data
</script>
    
<section>
    <h2>Projecten 2022 - 2023</h2>

    <ul>
        {#each data.projects as project}
            <li>
                <a href="projecten/{project.slug}">
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
</section>

<style>
    em {
        font-size: .8em;
        background-color: #eee;
        right:-.5rem;
        color:#000
    }
</style>
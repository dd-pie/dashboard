<script>
    export let data
</script>

<section>
    <h2>Nieuwe projecten</h2>

    <ul>
        {#each data.activeProjects.projects as project}
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
                            <ul>
                                {#each project.courses as course}
                                    {#if course.abbreviation.length > 0}
                                    <li>
                                        <em class={course.abbreviation}>{course.abbreviation}</em>
                                    </li>
                                    {/if}
                                {/each}
                            </ul>
                            {/if}
                        </div>
                    </a>
                </li>
        {/each}
    </ul>
    <a href="/projecten">
        Bekijk alle projecten
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 12l14 0" />
            <path d="M15 16l4 -4" />
            <path d="M15 8l4 4" />
        </svg>
    </a>
</section>

<section>     
    <h2>Nieuwe challenges</h2>

    <ul>
        {#each data.pendingProjects.projects as project}
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
    <a href="/design-challenges">
        Bekijk alle design challenges
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 12l14 0" />
            <path d="M15 16l4 -4" />
            <path d="M15 8l4 4" />
        </svg>
    </a>
</section> 

<section>
    <h2>Nieuw partners</h2>

    <ul>
        {#each data.partners.organizations as partner}
            <li>
                <a href="partners/{partner.slug}">
                    <strong>{partner.name}</strong>
                </a>
            </li>
        {/each}
    </ul>

    <a href="/partners">
        Bekijk alle partners
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 12l14 0" />
            <path d="M15 16l4 -4" />
            <path d="M15 8l4 4" />
        </svg>
    </a>
</section>

<section>
    <h2>Nieuw leads</h2>

    <ul>
        {#each data.leads.organizations as lead}
            <li>
                <a href="leads/{lead.slug}">
                    <strong>{lead.name}</strong>
                </a>
            </li>
        {/each}
    </ul>

    <a href="/leads">
        Bekijk alle leads
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 12l14 0" />
            <path d="M15 16l4 -4" />
            <path d="M15 8l4 4" />
        </svg>
    </a>
</section>

<style>
    section > a {
        margin-bottom: 2rem;
        margin: 1rem;
        align-self:center
    }
    section > a:hover {
        text-decoration: none;
    }
    section > a svg {
        position: relative;
        top:.25rem;
        transition:.1s
    }
    section > a:hover svg {
        position: relative;
        top:.25rem;
        transform:translateX(.1rem)
    }
</style>
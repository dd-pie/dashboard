<script>
    export let data

    const { organizations } = data
</script>

<section>
    <h2>Leads</h2>

    <ul>
        {#each organizations as organization}
            <li>
                <a href="/partners/{organization.slug}">
                    <strong>{organization.name}</strong>
                </a>
            </li>
        {/each}
    </ul>
</section>

<style>
    section {
            max-width: 30em;
        }
    @media (min-width:60em) {
        
        section > ul {
            grid-template-columns: repeat(1, 1fr);
        }

    }
</style>
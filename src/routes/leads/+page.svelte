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

<script>
    export let data
</script>

<section>
    <h2>Partners</h2>

    <ul>
        {#each data.organizations as organization}
            <li>
                <a href="/partners/{organization.slug}">
                    <strong>{organization.name}</strong>
                    <em>{organization.companyType}</em>
                </a>
            </li>
        {/each}
    </ul>
</section>

<style>
    em {
        font-size: .8em;
        background-color: #eee;
        right:-.5rem
    }
</style>
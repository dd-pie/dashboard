<script>
    export let data

    console.log(data)
</script>


<main>
    <header>
        <h1>Digital Design <strong>Family</strong></h1>
        <ul>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                    <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                </svg>
                <a href="https://fdnd.nl">Frontend Design & Development</a>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                    <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                </svg>
                <a href="https://www.cmd-amsterdam.nl/">Communication Multimediadesign & Development</a>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                    <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                </svg>
                <a href="https://www.amsterdamuas.com">Master Digital Design</a>
            </li>
        </ul>
    </header>
    
    <div>
        <section>
            <h2>Projecten</h2>

            <ul>
                {#each data.projects as project}
                    {#if project.projectStatus == 'active'}
                        <li>
                            <a href="{project.id}">
                                <strong>{project.title}</strong>
                                {#if project.organization}
                                    <span>{project.organization.name}</span>
                                {/if}
                            </a>
                        </li>
                    {/if}
                {/each}
            </ul>
        </section>

        <section>     
            <h2>Leads</h2>

            <ul>
                {#each data.projects as project}
                    {#if project.projectStatus == 'pending'}
                    <li>
                        <a href="{project.id}">
                            <strong>{project.title}</strong>
                            {#if project.organization}
                                <span>{project.organization.name}</span>
                            {/if}
                        </a>
                    </li>
                    {/if}
                {/each}
            </ul>
        </section> 
    </div>
</main>

<style>
h1 {
    font-size: 1.5em;
    margin:0 0 0;
    font-weight: normal;
}
h1 strong {
    color: var(--mdd);
}
header {
    padding:0 1rem;
    margin-bottom: 2rem;
}
header ul {
    display:flex;
    gap:1rem;
    font-weight: normal;
}

main {
    max-width:40em;
}
h2 {
    margin:0;
    font-weight: normal;
}
main div {
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    gap:1rem
}
section {
    background-color: #fff;
    border-radius:1rem;
    padding:1rem
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
ul li {
    position: relative;
    display: flex;
    margin: 1.25rem 0;
}
ul li a {
    display:flex;
    flex-direction:column
}
a {
    width:100%;
    font-weight: normal;
}
a,
a:active,
a:visited {
    color:#333;
    font-size: .9rem;
    display:block;
    position: relative;
    
}
a:hover {
    color: var(--mdd);
}

a em {
    background-color: #eee;
    border-radius:.25rem;
    font-style: normal;
    padding:.25rem;
    text-decoration: none;
    position:absolute;
    top:0;
    right:0;
    display:block
}

main {
    padding: 1rem;
}


</style>



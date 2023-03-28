<script>
    export let data
</script>
    
<section>
    <h2>Projecten</h2>

    <ul>
        {#each data.projects as project}
            <li>
                <a href="{project.id}">
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
</section>

<style>
h2 {
    margin-left: .5rem !important; /* yuck*/
    font-weight: normal;
    font-size: 1.5rem;
    margin: 0;
}
ul {
    list-style: none;
    padding: 0;
    display:flex;
    flex-direction:column
}

ul li {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: .5rem;
    position: relative
}

a,
a:active,
a:visited {
    color:#333;
    font-size: .9rem;
}
main {
    margin-top: 2rem;
    padding: 1rem;
}

section {
    display:flex;
    flex-direction: column;
    position: relative;
}


section > ul > li {
    padding-bottom: .5rem;
    position: relative;
    margin-bottom: .25rem;
    background: #fff;
    flex:1;
}

section > ul > li:hover {
    background-color: #f9f9f9;
    transform:scale(1.005)
}

ul > li > a {
    text-decoration: none;
    margin-right: .5rem;
    position: relative;
    display: block;
    width:100%
}

ul > li > a strong {
    display: block;
}
a em {
    position:absolute;
    right:0;
    font-style: normal;
    display:block;
    padding:.1rem .2rem;
    top:0
}
a em.fdnd { background-color:var(--fdnd); }
a em.cmd { background-color:var(--cmd); }
a em.mdd { background-color:var(--mdd); color:#fff }

ul a:before {
    content:'';
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
}

ul ul li {
    display:flex;
    flex-direction: column;
    background-color: transparent;
    padding:0 .25rem
}
</style>
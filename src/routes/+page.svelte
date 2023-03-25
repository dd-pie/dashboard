<script>
    export let data

    console.log(data.projects[0].courses[0])
</script>


<main>
    <header>
        <h1><strong>PIE Family</strong> / <em class="fdnd">FDND</em> / <em class="cmd">CMD</em> / <em class="mdd">MDD</em> </h1>

        <nav>
            <ul>
                <li><a href="./">Dashboard</a></li>
                <li><a href="partners.html">Partners</a></li>
                <li class="active"><a href="projecten.html">Projecten</a></li>
                <li><a href="design-challenges.html">Design challenges</a></li>
                <li><a href="documenten.html">Documenten</a></li>
                <li><a href="over-pie.html">Over Pie</a></li>
            </ul>
        </nav>

        <form action="#">
            <fieldset>
                <legend>Filter projecten</legend>

                <p>
                    <label for="programme">Opleiding</label>

                    <select name="programme" id="programme">
                        <option value="" disabled="" selected="">kies opleiding</option>
                        <option value="fdnd">FDND</option>
                        <option value="cmd">CMD</option>
                        <option value="mdd">MDD</option>
                    </select>
                </p>

                <p>
                    <label for="year">Studiejaar</label>

                    <select name="year" id="year">
                        <option value="" disabled="" selected="">kies studiejaar</option>
                        <option value="year1">Propedeuse</option>
                        <option value="year2">Jaar 2</option>
                        <option value="year3">Jaar 3</option>
                        <option value="year4">Jaar 4</option>
                    </select>
                </p>

                <p>
                    <label for="term">Periode</label>

                    <select name="term" id="term">
                        <option value="" disabled="" selected="">Kies een periode</option>
                        <option value="block1">Blok 1</option>
                        <option value="block2">Blok 2</option>
                        <option value="block3">Blok 3</option>
                        <option value="block4">Blok 4</option>
                        <option value="block4">Semester 1</option>
                        <option value="block4">Semester 2</option>
                        
                    </select>
                </p>

                <p>
                    <label for="topics">Onderwerpen</label>

                    <select name="topics" id="topics">
                        <option value="" disabled="" selected="">kies onderwerp</option>
                        <option value="concept">Concept</option>
                        <option value="content">Content</option>
                        <option value="vid">VID</option>
                        <option value="ui-ux">UI/UX</option>
                        <option value="fed">Frontend</option>
                    </select>
                </p>

                <p>
                    <label for="themes">Thema's</label>

                    <select name="thems" id="themes">
                        <option value="" disabled="" selected="">kies thema</option>
                        <option value="">Jeugdzorg</option>
                        <option value="">Duurzaamheid</option>
                        <option value="">Mediawijsheid</option>
                        <option value="">Voeding</option>
                        <option value="">Beweging</option>
                    </select>
                </p>

                <p>
                    <label for="themes">Sustainable Development Goals</label>

                    <select name="sdg" id="sdg">
                        <option value="" disabled="" selected="">kies SDG</option>
                        <option value="">Armoede</option>
                        <option value="">Honger</option>
                        <option value="">Gezondheidszorg</option>
                        <option value="">Gendergelijkheid</option>
                        <option value="">Schoon water</option>
                        <option value="">Duurzame energie</option>
                        <option value="">Economische groei</option>
                        <option value="">Infrastructuur</option>
                        <option value="">Gelijkheid</option>
                        <option value="">Veiligheid</option>
                        <option value="">Duurzame consumptie</option>
                        <option value="">Klimaat</option>
                        <option value="">Oceanen &amp; Zeeën</option>
                        <option value="">Biodiversiteit</option>
                        <option value="">Publieke diensten</option>
                        <option value="">Mondiaal partnerschap</option>
                    </select>
                </p>
            </fieldset>
        </form>
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
                                <div>
                                    {#if project.organization}
                                        <span>{project.organization.name}</span>
                                    {/if}

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
                    {/if}
                {/each}
            </ul>
        </section> 
    </div>
</main>

<style>
header {
    padding: 1rem 1rem 0;
    position: relative;
    background-color: #333;
    color: #666;
    position: fixed;
    width: 100%;
    z-index: 100;
    top: 0;
    margin:0 -1rem
}
main {
    margin-top: 2rem;
}

h1, h2 {
    margin-left: .5rem !important; /* yuck*/
    font-weight: normal;
    font-size: 1.5rem;
    margin: 0;
}

h1 {
margin: 0;  
font-size: 1.5rem;
text-transform: uppercase;
}

h1 strong {
    color: #fff
}

h1 em {
    font-style: normal;
}

h1 em.fdnd { color: var(--fdnd) }
h1 em.cmd {  color: var(--cmd) }
h1 em.mdd { color: var(--mdd) }

h1 strong {
    display: block;
}

h2 time {
    font-weight: normal; 
    font-size: .8em;
    white-space: nowrap;
}

h3 {
    font-weight: normal;
    margin-bottom: .5rem;
}
.detail h3 {
    margin-bottom: 0;
}

h4{
    margin-bottom: 0;
    margin-left: .5rem;
}

ul {
    list-style: none;
    padding: 0;
    display:flex
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

img {
    max-width: 100%;
}

header > form {
    display:none;
}

nav {
    background-color: #555;
    margin:1rem -1rem 0;
    padding-left:1rem
}

nav ul {
    margin:0;
    overflow-x:scroll
}
nav ul li a,
nav ul li a:active, 
nav ul li a:visited {
    color:#fff;
    white-space: nowrap;
    margin-right: 0;
}
nav ul li:hover {
    background-color: #fff;
}
nav ul li.active {
    background-color: #eee;
}
nav ul li:hover a,
nav ul li.active a {
    color: #333;
}

main {
    padding: 1rem;
}

main > div {
    position: relative;
}

section#design-challenges ul li {
    flex-direction: column;
    align-items:flex-start
}

section {
    display:flex;
    flex-direction: column;
    position: relative;
}

section > header {
    display:flex;
    align-items:flex-start;
    justify-content: space-between;
    margin-right: .5rem;
    position: relative;
}

section > header button {
    display:flex;
    border:none;
    align-items: flex-end;
    white-space: nowrap;
    margin-top: 1.75rem;
}

section > header button svg {
    margin-left: .25rem;
    transform:translateY(3px)
}
section > div {
    width:50%;
    align-self: center;
    margin-bottom: 2rem;
}
section > p {
    margin-left: .5rem;
}
section > ul,
aside > ul {
    display: flex;
    flex-direction: column;
    margin-top:2rem
}
aside {
    background-color: #fff;
    align-self: start;
}
.detail h3 {
    font-weight: bold;
}
aside > ul {
    margin-top: .5rem;
}
aside  > ul > li > a {
    font-size: 1em;
    display:flex;
    align-items: center;
}
aside  > ul > li > a em {
    font-size: 1em;
    margin-left: .25rem;
}
aside ul img {
    display:block;
    height:auto;
    width:5rem;
    border:none;
}
aside svg {
    margin-left: -.25rem;
}

aside ul.sdg {
    flex-direction:row
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

section > a {
    position: relative;
    align-self:flex-end;
    padding:.5rem 1.5rem .5rem .5rem;
    background-color: #fff;
    text-decoration: none;
}

section > a:hover {
    background-color: #666;
    color:#fff
}

section > a svg {
    position: absolute;
    right:.25rem;
    top:calc(50% - 8px)
}
section > a:hover svg {
    stroke:#fff
}

ul > li > a {
    text-decoration: none;
    margin-right: .5rem;
    position: relative;
    display: block;
    width:100%
}

section ul > li > a > svg {
    position: absolute;
    top:0;
    right:-.25rem
}

ul > li > a strong {
    display: block;
}

ul > li > a em {
    font-size: .65em;
    font-style: normal;
    background-color: #f0f0f0;
    padding: .1rem .25rem;
    text-transform: uppercase;
}

ul > li > a em.client {
    text-transform: capitalize;
}

a em {
    position: absolute;
    right: 0;
    color:#333
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

ul img {
    height:12rem;
    object-fit: cover;
    border-radius:.25rem;
    border: 1px solid rgb(190,190,190);
    background-color: rgb(190,190,190);
    width:100%;
    margin:1rem 0
}

ul svg {
    transform: scale(0.8);
}

ul ul {
    font-size: .65rem;
    display:flex;
    position:absolute;
    right:.25rem;
    top:.75rem;
}

ul p {
    margin:0;
    font-size: .8em;
    padding-right:2em;
}
#design-challenges ul {
    min-height:var(--height)
}
#design-challenges ul p {
    margin-top:.5rem
}

.projects ul li p,
ul img {
    display:none;
}


ul li.active p,
ul li.active  img,
li.active ul ul {
    display:flex;
}

li.active {
    flex-direction: column;
    align-items: flex-start;
}

ul ul li {
    display:flex;
    flex-direction: column;
    background-color: transparent;
    padding:0 .25rem
}

.single-col p,
.single-col h4,
.single-col img {
    margin-left:.5rem;
    max-width:40em;
}

/* form */
form {
    overflow:hidden;
    width:40vw
}

fieldset {
    border:none;
    margin-top: 7rem;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

fieldset p {
    margin-top: 0;
}

legend {
    font-weight: bold;
    padding: 0 .5rem;
    display: none;
}

label {
    display: block;
    margin-bottom: .25rem;
    padding: 0 .5rem;
    font-size: .8em;
}

select {
    width: 100%;
    font-size: .8em;
    font-family: inherit;
    padding: .5rem .25rem;
    border:none;
}

/* breakpoint 1 */
@media (min-width:60em) {
    main {
        margin-top:0;
    }
    main div,
    footer ul {
        display: grid;
        gap: 2em;
        grid-template-columns: 1fr 1fr;
    }
    
    .multi-cols {
        display: grid;
        grid-template-columns: repeat(3, minmax(400px,1fr));
    }

    .multi-cols li {
        margin-right: .5rem;
    }
    main.detail {
        grid-template-columns: minmax(auto, 40em) 350px;
    }

    main.single-col {
        display:flex;
        flex-direction:column;
    }

    main > header {
        grid-column: 1 / -1;
        margin-bottom: -2rem;
    }

    footer {
        grid-column: 1 / -1
    }

    footer ul {
        justify-items: end;
    }

    h1 strong {
        display: inline
    }
}



</style>



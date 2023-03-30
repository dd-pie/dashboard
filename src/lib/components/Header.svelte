<header>
    <h1><strong>PIE Family</strong> / <em class="fdnd">FDND</em> / <em class="cmd">CMD</em> / <em class="mdd">MDD</em> </h1>

    <nav>
        <ul>
            <li><a href="./">Dashboard</a></li>
            <li><a href="./partners">Partners</a></li>
            <li><a href="./projecten">Projecten</a></li>
            <li><a href="./design-challenges">Design challenges</a></li>
            <li><a href="./documenten">Documenten</a></li>
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
    margin:0 -1rem;
}

h1 {
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
    color: #fff;
    display: block;
}

h1 em {
    font-style: normal;
}

h1 em.fdnd { color: var(--fdnd) }
h1 em.cmd {  color: var(--cmd) }
h1 em.mdd { color: var(--mdd) }

/* nav */

nav {
    background-color: #555;
    margin:1rem -1rem 0;
    padding-left:1rem;
    font-size: .9rem;
}

nav ul {
    margin:0;
    padding:0;
    overflow-x:scroll;
    display:flex;
    flex-direction:row;
    list-style: none;
}
nav li {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: .5rem;
    position: relative;
}

nav li a {
    color: #fff;
    white-space: nowrap;
    margin-right: 0;
    text-decoration: none;
}


/* form */
header > form {
    display:none;
}
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

@media (min-width:60em) {
    h1 strong {
        display: inline;
    }
}
</style>
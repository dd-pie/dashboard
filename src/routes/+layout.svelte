<script>
	import Header from '$lib/components/Header.svelte'
</script>

<Header />

<main>
	<slot />
</main>

<style>

@media (min-width:60em) {
    main {
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        gap:2rem
    }
}
</style>
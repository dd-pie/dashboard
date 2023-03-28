<script>
	import Header from '$lib/components/Header.svelte'
</script>

<Header />

<main>
	<slot />
</main>

<style>
main {

}
@media (min-width:60em) {
    main {
        max-width:50vw
    }
}
</style>
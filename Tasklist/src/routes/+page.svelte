<script>
	export let data;
	import Card from '$lib/components/task.svelte';
</script>

{#each data.tasks as task}
	<Card {task} />
{/each}

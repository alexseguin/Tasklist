<script lang="ts">
	import type { TaskTag } from '$lib/types/task';

	export let tag: TaskTag;
</script>

<span class="rounded p-1 bg-black text-white">
    {tag.tag}
</span>

<script lang="ts">
	import { getTaskCardTheme } from '$lib/helpers/themes';
	import type { Task } from '$lib/types/task';
	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';
	dayjs.extend(relativeTime);

	export let task: Task;

	const date = dayjs(task.due_date).from(dayjs());
	const numDays = dayjs(task.due_date).diff(dayjs(), 'days');

	const cardTheme = getTaskCardTheme(numDays);
</script>

<div class="my-6 p-4 rounded-3xl border-4 flex b justify-between {cardTheme}">
	<div>
		{#if !!task.icon}
			<span>{task.icon}</span>
		{/if}
		<span class="flex flex-col gap-y-2">
			<div class="font-semibold text-2xl leading-tight">{task.name}</div>

			{#if !!task.description}
				<div class="text-lg text-gray leading-tight">
					{task.description}
				</div>
			{/if}
		</span>
	</div>

	<div class="flex items-center justify-center flex-col">
		<div><small class="muted">Due</small></div>
		<div><strong>{date}</strong></div>
	</div>
</div>

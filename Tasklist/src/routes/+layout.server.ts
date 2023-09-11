import { getTasks } from '$lib/api/tasks';
import type { Task } from '$lib/types/task';

export const load = async (): Promise<{ tasks: Task[] }> => {
	return {
		tasks: await getTasks()
	};
};

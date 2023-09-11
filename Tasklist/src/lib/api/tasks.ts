import type { Task } from '$lib/types/task';
import dayjs from 'dayjs';

export const getTasks = async (): Promise<Task[]> => {
	const tasks = await Promise.resolve([
		{
			taskid: crypto.randomUUID(),
			name: 'Do the laundry',
			description: 'just a chore',
			due_date: dayjs().add(8, 'day').format()
		},
		{
			taskid: crypto.randomUUID(),
			name: 'Do the laundry',
			description: 'just a chore',
			due_date: dayjs().add(7, 'day').format()
		},
		{
			taskid: crypto.randomUUID(),
			name: 'Do the laundry',
			description: 'just a chore',
			due_date: dayjs().add(3, 'day').format()
		},
		{
			taskid: crypto.randomUUID(),
			name: 'Do the laundry',
			description: 'just a chore',
			due_date: dayjs('2023-09-08').format()
		}
	]);

	return tasks.sort((a, b) => dayjs(a.due_date).diff(dayjs(b.due_date)));
};

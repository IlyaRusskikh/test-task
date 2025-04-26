import { apiUri } from '../../settings'
import { ITask } from '@/interfaces/task'
import { IApiResponse, IApiResponseTaskList } from '@/interfaces/task'

export const GetAllTasks = async (): Promise<IApiResponseTaskList> => {
	const response = await fetch(`${apiUri}/tasks`)
	return response.json()
}

export const ChangeTaskStatus = async (
	task_id: ITask['_id']
): Promise<IApiResponse> => {
	const response = await fetch(`${apiUri}/tasks`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ task_id: task_id }),
	})
	return response.json()
}

export const PostTask = async (
	title: ITask['title']
): Promise<IApiResponse> => {
	const response = await fetch(`${apiUri}/tasks`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ title: title }),
	})
	return response.json()
}

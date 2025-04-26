export interface ITask {
	_id: string
	title: string
	completed: boolean
	__v: number
}

export interface IApiResponse {
	status: number
	values: object | ITask[]
}

export interface ITaskItem {
	title: string
	completed: boolean
	id: string
	key: string
}

export interface ITaskForm {
	forceUpdate: () => void
	toggleHideCompleted: () => void
}

export interface IApiResponseTaskList {
	status: number
	values: ITask[]
}

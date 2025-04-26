'use client'

import { TaskItem } from '@/components/task-item/task-item'
import { GetAllTasks } from '@/actions/task'
import { TaskForm } from '@/components/task-form/task-form'
import { useEffect, useState } from 'react'
import { ITask } from '@/interfaces/task'

export default function Planner() {
	const [tasks, setTasks] = useState<ITask[]>([])
	const [needUpdate, setNeedUpdate] = useState(true)
	const [hideCompleted, setHideCompleted] = useState(true)

	useEffect(() => {
		;(async () => {
			GetAllTasks().then((data) => {
				setTasks(data.values)
			})
		})()
	}, [needUpdate])

	const forceUpdate = (): void => {
		setNeedUpdate(!needUpdate)
	}

	const toggleHideCompleted = (): void => {
		setHideCompleted(!hideCompleted)
		const items = document.querySelectorAll('.task-item')
		if (hideCompleted) {
			items.forEach((item) => {
				if (item.getAttribute('data-checked') === 'true') {
					item.setAttribute('data-hidden', 'true')
				}
			})
		} else {
			items.forEach((item) => {
				item.setAttribute('data-hidden', 'false')
			})
		}
	}

	return (
		<>
			<h1 className='mt-10 text-center text-5xl'>Мои задачи</h1>
			<TaskForm
				forceUpdate={forceUpdate}
				toggleHideCompleted={toggleHideCompleted}
			/>
			<div className='task-list mx-auto max-w-sm mt-10 px-2'>
				{tasks.map((task: ITask) => (
					<TaskItem
						title={task.title}
						completed={task.completed}
						id={task._id}
						key={task._id}
					/>
				))}
			</div>
		</>
	)
}

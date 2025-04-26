'use client'

import { useState } from 'react'
import { IoMdCheckmark } from 'react-icons/io'
import { ChangeTaskStatus } from '@/actions/task'
import { ITaskItem } from '@/interfaces/task'

export const TaskItem = (props: ITaskItem) => {
	const [taskIsChecked, setTaskIsChecked] = useState(props.completed)

	async function changeStatus() {
		setTaskIsChecked(!taskIsChecked)
		await ChangeTaskStatus(props.id)
	}

	return (
		<>
			<div
				className='task-item group flex justify-center mt-1 cursor-pointer mb-3 data-[checked=true]:opacity-50 transition-all data-[hidden=true]:hidden'
				onClick={changeStatus}
				data-checked={taskIsChecked.toString()}
				data-hidden='false'
			>
				<div className='rounded-xl text-xl px-3 focus:bg-background bg-neutral-800 focus:outline-sky-500 py-1 focus:outline-2 w-full'>
					{props.title}
				</div>
				<div className='px-2 ms-2 rounded-xl text-xl bg-neutral-800 pt-2'>
					<IoMdCheckmark
						className={
							taskIsChecked
								? 'opacity-100 transition-all'
								: 'opacity-0 transition-all'
						}
					/>
				</div>
			</div>
		</>
	)
}

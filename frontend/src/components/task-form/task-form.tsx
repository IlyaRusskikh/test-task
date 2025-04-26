'use client'

import { FaSortAmountUpAlt } from 'react-icons/fa'
import { GoPlus } from 'react-icons/go'
import { PostTask } from '@/actions/task'
import { ITaskForm } from '@/interfaces/task'

export const TaskForm = (props: ITaskForm) => {
	async function ForcePostTask(e: React.SyntheticEvent) {
		e.preventDefault()
		const label_input = document.querySelector('#new_task') as HTMLInputElement
		await PostTask(label_input.value)
		label_input.value = ''
		props.forceUpdate()
	}

	return (
		<>
			<form className='mx-auto max-w-sm mt-5 px-2' onSubmit={ForcePostTask}>
				<div>
					<label
						htmlFor='new_task'
						className='block text-lg font-medium text-gray-700 dark:text-gray-300 ps-3'
					>
						Добавить задачу
					</label>
					<div className='group flex justify-center mt-1'>
						<input
							id='new_task'
							type='text'
							className='rounded-xl text-xl px-3 focus:bg-background bg-neutral-800 focus:outline-sky-500 py-1 focus:outline-2 w-full'
							required
						/>
						<button
							className='ms-2 rounded-xl text-xl bg-neutral-800 focus:outline-sky-500 focus:outline-2 cursor-pointer w-12 flex justify-center pt-2'
							type='submit'
						>
							<GoPlus />
						</button>
						<button
							className='w-12 ms-2 rounded-xl text-xl bg-neutral-800 focus:outline-sky-500 focus:outline-2 cursor-pointer flex justify-center pt-2'
							type='button'
							onClick={props.toggleHideCompleted}
						>
							<FaSortAmountUpAlt />
						</button>
					</div>
				</div>
			</form>
		</>
	)
}

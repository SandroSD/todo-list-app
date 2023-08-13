import React, { useContext } from 'react';
import { IItem, TodoContextType } from '../../context/context.interface';
import { TodoContext } from '../../context/todoListAppContext';

export type TaskProps = {
	item: IItem;
};

const Task: React.FC<TaskProps> = ({ item }) => {
	const { handleCompleteTask, handleDeleteTask } = useContext(
		TodoContext
	) as TodoContextType;

	return (
		<div
			className={`border-2 border-black my-2 rounded-lg flex p-2 ${
				item.isSelected ? 'bg-gray-300' : ''
			}`}
		>
			<div className='px-3 flex items-center'>
				<input
					type='checkbox'
					name='checked'
					className=''
					checked={item.isSelected}
					onChange={() => handleCompleteTask(item.uuid)}
				/>
			</div>
			<div className='grow pt-1 text-base'>
				<div>{item.content}</div>
				<div className='text-xs flex justify-center text-gray-400 italic font-bold'>
					Created at: {item.createdAt.toLocaleString()}
				</div>
			</div>
			<div className='px-3 flex items-center'>
				<button onClick={() => handleDeleteTask(item.uuid)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='icon icon-tabler icon-tabler-trash'
						width='28'
						height='28'
						viewBox='0 0 24 24'
						strokeWidth='2'
						stroke='#ff2825'
						fill='none'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<path
							stroke='none'
							d='M0 0h24v24H0z'
							fill='none'
						/>
						<path d='M4 7l16 0' />
						<path d='M10 11l0 6' />
						<path d='M14 11l0 6' />
						<path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' />
						<path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Task;

import React, { useContext } from 'react';
import { TodoContext } from '../../context/todoListAppContext';
import { TodoContextType } from '../../context/context.interface';

export type HeaderProps = object;

const Header: React.FC<HeaderProps> = () => {
	const { saveItem, saveList, item, list } = useContext(
		TodoContext
	) as TodoContextType;

	const tasksCompleted = list.reduce(
		(acum, current) => (current.isSelected ? acum + 1 : acum),
		0
	);

	return (
		<>
			<div
				className='font-serif text-4xl font-bold text-center'
				id='title'
			>
				Todo List App
			</div>
			<div className='mt-5 h-8 flex flex-row'>
				<div className='basis-3/4 mr-5'>
					<input
						className='w-full border-2 rounded-lg p-2'
						name='item'
						aria-label='item'
						maxLength={50}
						value={item}
						onChange={(e) => saveItem(e.target.value)}
					/>
				</div>
				<div className='basis-1/4'>
					<button
						className='w-full border-2 rounded-lg disabled:bg-green-300 bg-green-500 text-white font-semibold p-2'
						onClick={() => {
							saveList(item);
						}}
						disabled={!item}
					>
						Agregar
					</button>
				</div>
			</div>
			{list.length > 0 && (
				<div className='basis-1 pl-1 mt-4 text-sm italic text-slate-400'>
					{list.length} tasks created,{' '}
					{tasksCompleted === list.length ? 'all' : tasksCompleted}{' '}
					tasks completed.
				</div>
			)}
		</>
	);
};

export default Header;

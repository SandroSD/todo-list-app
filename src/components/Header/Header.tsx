import React, { useContext } from 'react';
import { TodoContext } from '../../context/todoListAppContext';
import { TodoContextType } from '../../context/context.interface';

export type HeaderProps = object;

const Header: React.FC<HeaderProps> = () => {
	const { saveItem, saveList, item } = useContext(
		TodoContext
	) as TodoContextType;

	return (
		<>
			<div className='font-serif text-4xl font-bold text-center'>
				Todo List App, CHANGE ON PR.
			</div>
			<div className='my-5 h-8 flex flex-row'>
				<div className='basis-3/4 mr-5'>
					<input
						className='w-full border-2 rounded-lg p-2'
						name='item'
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
		</>
	);
};

export default Header;

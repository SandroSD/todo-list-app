import React, { useContext } from 'react';
import { TodoContext } from '../../context/todoListAppContext';
import { TodoContextType } from '../../context/context.interface';
import { Task } from '..';

export type ListProps = object;

const List: React.FC<ListProps> = () => {
	const { list } = useContext(TodoContext) as TodoContextType;

	return (
		<div className='text-center'>
			{list.map((item, index) => {
				return (
					<Task
						key={index}
						item={item}
					/>
				);
			})}
		</div>
	);
};

export default List;

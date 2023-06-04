import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { IItem, IProvider, TodoContextType } from './context.interface';

export const TodoContext = createContext<TodoContextType | null>(null);

const TodoProvider: React.FC<IProvider> = ({ children }) => {
	const [list, setList] = useState<IItem[]>([]);
	const [item, setItem] = useState<string>('');

	const saveList = (item: string) => {
		setList([
			...list,
			{
				uuid: uuidv4(),
				content: item,
				isSelected: false,
				createdAt: new Date(),
			},
		]);
		setItem('');
	};

	const saveItem = (text: string) => {
		setItem(text);
	};

	const handleCompleteTask = (id: string) => {
		const tasks = [...list];
		const taskIndex = tasks.findIndex((item) => item.uuid === id);

		tasks[taskIndex].isSelected = !tasks[taskIndex].isSelected;

		setList([...tasks]);
	};

	const handleDeleteTask = (id: string) => {
		const tasks = list.filter((task) => task.uuid !== id);

		setList([...tasks]);
	};

	return (
		<TodoContext.Provider
			value={{
				list,
				saveList,
				item,
				saveItem,
				handleDeleteTask,
				handleCompleteTask,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};

export default TodoProvider;

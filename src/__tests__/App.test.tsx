import { render } from '@testing-library/react';

import App from '../App';
import TodoProvider, { TodoContext } from '../context/todoListAppContext';

describe('App component', () => {
	it('should render App component with the provider', () => {
		render(
			<TodoProvider>
				<App />
			</TodoProvider>
		);
	});

	it('should render App component with context provider', () => {
		render(
			<TodoContext.Provider
				value={{
					list: [],
					saveList: jest.fn(),
					item: '',
					saveItem: jest.fn(),
					handleDeleteTask: jest.fn(),
					handleCompleteTask: jest.fn(),
				}}
			>
				<App />
			</TodoContext.Provider>
		);
	});
});

import {
	//fireEvent,
	render,
	//screen,
	//waitFor,
	cleanup,
} from '@testing-library/react';

//import userEvent from '@testing-library/user-event';

import { Header } from '../components';
import { TodoContext } from '../context/todoListAppContext';

describe('Header Component', () => {
	afterEach(cleanup);
	afterAll(jest.clearAllMocks);

	it('should render correctly', () => {
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
				<Header />
			</TodoContext.Provider>
		);
	});

	it('should display initial state', () => {
		const { queryByLabelText, getByRole } = render(
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
				<Header />
			</TodoContext.Provider>
		);

		const divElement = queryByLabelText(/todo list/i);
		const inputElement = getByRole('textbox');
		const buttonElement = getByRole('button');

		expect(divElement).toBeDefined();
		expect(inputElement).toBeDefined();
		expect(inputElement).toHaveValue('');
		expect(buttonElement).toBeDefined();
		expect(buttonElement).toBeDisabled();
	});

	/*it('should display enabled button when input is not empty', async () => {
		const { findByLabelText } = render(
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
				<Header />
			</TodoContext.Provider>
		);

		const inputElement = await findByLabelText('item');

		expect(inputElement).toBeDefined();
		//const buttonElement = getByRole('button');

		//const inputContent = 'Do some homework';

		fireEvent.change(inputElement, { target: { value: 'lala' } });
		await waitFor(() => {
			//expect(inputElement).toHaveValue('lala');

			screen.debug();
		});
		//expect(inputElement).toHaveValue('Do some homework');

		//expect(buttonElement).not.toBeDisabled();
	});*/
});

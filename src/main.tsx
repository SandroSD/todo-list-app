import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import TodoProvider from './context/todoListAppContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<TodoProvider>
		<App />
	</TodoProvider>
);

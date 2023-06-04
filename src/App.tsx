import { Header, List } from './components';

function App() {
	return (
		<div className='w-screen h-screen flex flex-col justify-center items-center'>
			<div className='w-4/12 h-4/6'>
				<Header />
				<List />
			</div>
		</div>
	);
}

export default App;

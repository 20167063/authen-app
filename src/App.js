import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './components/AppRouter';

const App = () => {
	return (
		<div className='container bg-white p-4 mt-5'>			
			<AppRouter />
		</div>
	);
};

export default App;

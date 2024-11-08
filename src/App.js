import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			{/* Routes allows us to render one route at a time */}
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/movie/:id' element={<Detail />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

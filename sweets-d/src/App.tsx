import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Footer from './page/footer/Footer'
import Header from './page/header/Header'
import Home from './page/home/Home'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App

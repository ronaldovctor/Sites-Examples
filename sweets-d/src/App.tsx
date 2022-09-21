import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Pedidos from './components/pedidos/Pedidos'
import Footer from './page/footer/Footer'
import Header from './page/header/Header'
import Home from './page/home/Home'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<div className='AppBody'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/pedidos' element={<Pedidos />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App

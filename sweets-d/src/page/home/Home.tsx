import React from 'react'
import Comentario from '../../components/comentario/Comentario'
import Introducao from '../../components/introducao/Introducao'
import Sabores from '../../components/sabores/Sabores'
import styles from './Home.module.scss'

function Home() {
	return (
		<div className=''>
			Home
			<Introducao />
			<Sabores />
			<Comentario />
		</div>
	)
}

export default Home

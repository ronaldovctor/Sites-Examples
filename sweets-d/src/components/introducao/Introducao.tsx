import React from 'react'
import styles from './Introducao.module.scss'
import TitleDescription from '../title-description/TitleDescription'
import DonutIntro from '../../assets/donut-introducao.jpg'
import { ReactComponent as Detail } from '../../assets/detail.svg'

function Introducao() {
	return (
		<section className={`${styles.content} container-lg`}>
			<div className={styles.description}>
				<TitleDescription
					title={'Adoce sua Vida'}
					subtitle={
						'Encontre aqui os sabores mais doces e gostosos. Traga para sua vida os nossos Donuts com igredientes de primeira qualidade com o foco de entregar excelentes produtos com aquele ingrediente secreto, o Amor.'
					}
				/>
			</div>
			<img className={styles.img} src={DonutIntro} alt='img-intro' />
			<div className={styles.detail}>
				<Detail />
			</div>
		</section>
	)
}

export default Introducao

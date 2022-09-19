import React from 'react'
import Donut from '../donut/Donut'
import TitleDescription from '../title-description/TitleDescription'
import styles from './Sabores.module.scss'
import Frutas from '../../assets/frutas.jpg'
import ChocolateBranco from '../../assets/chocolate-branco.jpg'
import ChocolateAoLeite from '../../assets/chocolate-leite.jpg'
import { ReactComponent as Detail } from '../../assets/detail_2.svg'
import Complementos from '../complementos/Complementos'

function Sabores() {
	return (
		<section className={styles.saboresContent}>
			<div className={`${styles.content} container-lg`}>
				<div className={styles.description}>
					<TitleDescription
						title={'Sabores'}
						subtitle={'Da fruta ao mais cremoso chocolate, escolha o seu.'}
						maxWidth={16}
						color={'var(--blue-gradient)'}
					/>
				</div>
				<div className={styles.sabores}>
					<div className={styles.donut}>
						<Donut
							img={Frutas}
							title={'Frutas Frescas'}
							description={
								'Amora, morango, uva, manga e muito mais para sua escolha.'
							}
						/>
					</div>
					<div className={styles.donut}>
						<Donut
							img={ChocolateBranco}
							title={'Chocolate Branco'}
							description={
								'Cobertura e recheio de chocolate branco com essências de morango e baunilha.'
							}
						/>
					</div>
					<div className={styles.donut}>
						<Donut
							img={ChocolateAoLeite}
							title={'Chocolate ao Leite'}
							description={
								'O delicioso chocolate ao leite, desde a cobertura ao recheio.'
							}
							flexDirection={'row'}
							secondaryColorPrice={true}
						/>
					</div>
				</div>
				<div className={styles.complementos}>
					<Complementos
						items={[
							{
								description: 'Frutas tropicais naturais fatiadas.',
								price: '1.80',
							},
							{
								description: 'Mistura de amendoas e castanhas.',
								price: '1.50',
							},
							{
								description: 'Paçoca e biscoitos triturados.',
								price: '2.00',
							},
						]}
					/>
				</div>
				<div className={styles.detail}>
					<Detail />
				</div>
			</div>
		</section>
	)
}

export default Sabores

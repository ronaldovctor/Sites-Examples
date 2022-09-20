import React from 'react'
import styles from './Comentario.module.scss'
import Bg from '../../assets/bg-comentario.jpg'

function Comentario() {
	return (
		<section
			className={styles.comentario}
			style={{
				background: `url(${Bg}) center`,
				backgroundSize: 'cover',
			}}
		>
			<div className={`${styles.content} container-lg`}>
				<div className={`${styles.text} animaRight`}>
					<p>
						“Um dos melhores donuts que eu e meus amigos já provaramos, se não o
						melhor. Seja em festa ou quando nos reunimos sempre pedimos para a
						sobremesa, não pode faltar.”
					</p>
					<span>Thiago Luíz</span>
				</div>
			</div>
		</section>
	)
}

export default Comentario

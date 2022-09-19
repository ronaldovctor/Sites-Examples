import React from 'react'
import styles from './Complementos.module.scss'

type ComplementosProps = {
	description: string
	price: string
}

function Complementos({ items }: { items: ComplementosProps[] }) {
	return (
		<div className={styles.content}>
			<div className={styles.title}>
				<h3>
					Complementos<span>.</span>
				</h3>
			</div>
			<div className={styles.complementos}>
				<ul>
					{items.map(({ description, price }) => (
						<li>
							<p>{description}</p>
							<span>$ {price}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Complementos

import React from 'react'
import styles from './Donut.module.scss'

type DonutProps = {
	title: string
	description: string
	img: string
	flexDirection?: string
	secondaryColorPrice?: boolean
}

function Donut({
	title,
	description,
	img,
	flexDirection,
	secondaryColorPrice,
}: DonutProps) {
	const newTitle: string[] = title.split(' ')

	return (
		<div className={`${styles.content} ${flexDirection && styles.row}`}>
			<div className={styles.photo}>
				<img src={img} alt='donut' />
				<span className={`${styles.price} ${secondaryColorPrice && styles.blue}`}>
					$ 30.00
				</span>
			</div>
			<div className={styles.description}>
				<h3 className={styles.title}>
					{newTitle.map((word) => (
						<p>{word}&nbsp;</p>
					))}
				</h3>
				{/*&nbsp; <span>F</span>rutas <span>F</span>rescas<span>.</span> */}
				<p className={styles.text}>{description}</p>
			</div>
		</div>
	)
}

export default Donut

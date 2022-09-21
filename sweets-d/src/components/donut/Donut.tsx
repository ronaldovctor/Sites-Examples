import React from 'react'
import styles from './Donut.module.scss'

export enum animation {
	right = 'animaRight',
	top = 'animaTop',
	bottom = 'animaBottom',
}

type DonutProps = {
	title: string
	description: string
	img: string
	flexDirection?: string
	secondaryColorPrice?: boolean
	animation?: animation
}

function Donut({
	title,
	description,
	img,
	flexDirection,
	secondaryColorPrice,
	animation,
}: DonutProps) {
	const newTitle: string[] = title.split(' ')

	return (
		<div className={`${styles.content} ${flexDirection && styles.row} ${animation}`}>
			<div className={styles.photo}>
				<img src={img} alt='donut' />
				<span className={`${styles.price} ${secondaryColorPrice && styles.blue}`}>
					$ 30.00
				</span>
			</div>
			<div className={styles.description}>
				<h3 className={styles.title}>
					{newTitle.map((word, index) => (
						<p key={index}>{word}&nbsp;</p>
					))}
				</h3>
				<p className={styles.text}>{description}</p>
			</div>
		</div>
	)
}

export default Donut

import React from 'react'
import styles from './TitleDescription.module.scss'

type TitleDescriptionProps = {
	title: string
	subtitle: string
	color?: string
	maxWidth?: number
}

function TitleDescription({ title, subtitle, color, maxWidth }: TitleDescriptionProps) {
	const newTitle: string[] = title.split(' ')

	return (
		<div
			className={styles.content}
			style={{
				maxWidth: `${maxWidth && `${maxWidth}rem`}`,
			}}
		>
			<div className={styles.title}>
				<h1
					style={{
						display: 'flex',
					}}
				>
					{newTitle.map((word) => (
						<p>{`${word}`}&nbsp;</p>
					))}
				</h1>
			</div>
			<div
				className={styles.description}
				style={{
					backgroundImage: `${color && color}`,
				}}
			>
				<p>{subtitle}</p>
			</div>
		</div>
	)
}

export default TitleDescription

import React, { useEffect, useState } from 'react'
import Checkbox from '../checkbox/Checkbox'
import styles from './Donutoption.module.scss'

type DonutOptionsProps = {
	title: {
		name: string
		price: string
	}
	extras?: Array<{
		name: string
		price: string
	}>
	size: 'small' | 'normal'
}

function DonutOption({ title, extras, size }: DonutOptionsProps) {
	return (
		<div className={`${styles.donutOption} ${size == 'normal' && styles.red}`}>
			<div className={styles.description}>
				<Checkbox
					color={`${size == 'normal' ? 'secondary' : 'primary'}`}
					size={'normal'}
				/>
				<div className={styles.text}>
					<p>{title.name}</p>
					<span>${title.price}</span>
				</div>
			</div>
			{size == 'normal' && (
				<div className={styles.options}>
					<div className={styles.qtd}>
						<label htmlFor=''>Quantidade:</label>
						<input type='number' name='' id='' min={0} max={15} />
					</div>
					<div className={styles.sep}></div>
					<div className={styles.extras}>
						{extras &&
							extras.map((extra) => (
								<div className={styles.extra}>
									<Checkbox color={'secondary'} size={'small'} />
									<div className={styles.text}>
										<p>{extra.name}</p>
										<p>${extra.price}</p>
									</div>
								</div>
							))}
					</div>
				</div>
			)}
		</div>
	)
}

export default DonutOption

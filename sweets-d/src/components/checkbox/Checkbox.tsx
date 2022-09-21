import React, { Dispatch, SetStateAction, useState } from 'react'
import styles from './Checkbox.module.scss'

type CheckboxProps = {
	color: 'primary' | 'secondary'
	size: 'normal' | 'small'
}

function Checkbox({ color, size }: CheckboxProps) {
	return (
		<label
			className={`${styles.checkbox} ${
				size == 'normal' ? styles.normal : styles.small
			} ${color == 'primary' ? styles.primary : styles.secondary}`}
		>
			<input type='checkbox' />
			<div className={styles.mark}></div>
		</label>
	)
}

export default Checkbox

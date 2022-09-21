import React, { InputHTMLAttributes } from 'react'
import styles from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
}

function Input({ label, ...props }: InputProps) {
	return (
		<div className={styles.field}>
			<label htmlFor=''>{label}</label>
			<input type='text' {...props} />
		</div>
	)
}

export default Input

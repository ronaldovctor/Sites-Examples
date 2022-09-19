import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
import { ReactComponent as SweetsD } from '../../assets/logo.svg'

function Header() {
	return (
		<header className={styles.header}>
			<nav className={`${styles.nav} container-lg`}>
				<div className={styles.logo}>
					<SweetsD />
				</div>
				<div className={styles.links}>
					<ul>
						<li>
							<NavLink to='#sabores'>Sabores</NavLink>
						</li>
						<li>
							<NavLink to='/pedidos'>Pedidos</NavLink>
						</li>
						<li>
							<NavLink to='#contato'>Contato</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Header

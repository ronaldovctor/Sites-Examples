import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './Header.module.scss'
import { ReactComponent as SweetsD } from '../../assets/logo.svg'
import { HashLink, NavHashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'

function Header() {
	const location = useLocation()
	const home = location.pathname != '/pedidos'

	return (
		<header className={styles.header}>
			<nav className={`${styles.nav} container-lg`}>
				<div className={styles.logo}>
					<NavLink to='/'>
						<SweetsD />
					</NavLink>
				</div>
				<div className={styles.links}>
					<ul>
						<li>
							{home ? (
								<HashLink smooth to='#sabores'>
									Sabores
								</HashLink>
							) : (
								<NavLink to={'/'}>Sabores</NavLink>
							)}
						</li>
						<li>
							<NavLink to='/pedidos'>Pedidos</NavLink>
						</li>
						<li>
							<HashLink smooth to='#contato'>
								Contato
							</HashLink>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Header

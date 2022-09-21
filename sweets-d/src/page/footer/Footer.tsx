import React from 'react'
import styles from './Footer.module.scss'
import Logo from '../../assets/logo.svg'
import { ReactComponent as Facebook } from '../../assets/facebook.svg'
import { ReactComponent as Instagram } from '../../assets/instagram.svg'
import { ReactComponent as Youtube } from '../../assets/youtube.svg'
import { HashLink } from 'react-router-hash-link'
import { NavLink, useLocation } from 'react-router-dom'

function Footer() {
	const location = useLocation()
	const home = location.pathname != '/pedidos'

	return (
		<section
			id='contato'
			className={styles.footer}
			style={{
				backgroundColor: 'white',
			}}
		>
			<div className={`${styles.content} container-lg`}>
				<div className={styles.img}>
					<img src={Logo} alt='logo' />
				</div>
				<div className={styles.contato}>
					<h3>
						<span>C</span>ontato<span>.</span>
					</h3>
					<div className={styles.links}>
						<ul>
							<li>
								<a href='tel:+55-11-9999-9999'>+55 11 9999-9999</a>
							</li>
							<li>
								<a href='mailto:contato@sweets-d.com'>contato@sweets-d.com</a>
							</li>
						</ul>
						<div className={styles.sep}></div>
						<div className={styles.socials}>
							<ul>
								<li>
									<Instagram />
								</li>
								<li>
									<Facebook />
								</li>
								<li>
									<Youtube />
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className={styles.infos}>
					<h3>
						<span>I</span>nformações<span>.</span>
					</h3>
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
								<NavLink to={'/pedidos'}>Pedidos</NavLink>
							</li>
							<li>
								<HashLink to='#contato'>Contatos</HashLink>
							</li>
						</ul>
					</div>
				</div>
				<div className={styles.rights}>Sweets-D © Alguns Direitos Reservados</div>
			</div>
		</section>
	)
}

export default Footer

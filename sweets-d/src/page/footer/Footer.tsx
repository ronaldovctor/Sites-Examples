import React from 'react'
import styles from './Footer.module.scss'
import Logo from '../../assets/logo.svg'
import { ReactComponent as Facebook } from '../../assets/facebook.svg'
import { ReactComponent as Instagram } from '../../assets/instagram.svg'
import { ReactComponent as Youtube } from '../../assets/youtube.svg'

function Footer() {
	return (
		<section className={styles.footer}>
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
								<a href='tel:551199999999'>+55 11 9999-9999</a>
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
								<a href=''>Sabores</a>
							</li>
							<li>
								<a href=''>Pedidos</a>
							</li>
							<li>
								<a href=''>Contatos</a>
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

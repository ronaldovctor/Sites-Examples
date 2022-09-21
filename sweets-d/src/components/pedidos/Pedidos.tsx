import React from 'react'
import styles from './Pedidos.module.scss'
import Bg1 from '../../assets/bg-pedidos-1.jpg'
import Bg2 from '../../assets/bg-pedidos-2.jpg'
import Input from '../input/Input'
import DonutOption from '../donut-option/DonutOption'
import Button from '../button/Button'

function Pedidos() {
	return (
		<section className={`${styles.pedidos}`}>
			<div className={`${styles.bg}`}>
				<img src={Bg1} alt='img-bg' />
				<img src={Bg2} alt='img-bg' />
			</div>
			<div className={`${styles.content} container-lg`}>
				<div className={styles.form}>
					<Input label={'Nome Completo'} placeholder={'Seu nome'} />
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: '1fr 1fr',
						}}
					>
						<Input label={'CPF'} placeholder={'000.000.000-00'} />
						<Input label={'Email'} type={'email'} />
					</div>
					<div className={styles.sep}></div>
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: '1fr 1fr',
						}}
					>
						<Input label={'CEP'} placeholder={'00.000-000'} />
						<Input label={'Bairro'} />
					</div>
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: '1fr 1fr',
						}}
					>
						<Input label={'Logradouro'} placeholder={'Rua, Avenida...'} />
						<Input label={'Número'} type={'number'} />
					</div>
					<div className={styles.aviso}>
						<span>*Apenas estado de São Paulo.</span>
					</div>
					<div className={styles.sep}></div>

					<div className={styles.options}>
						<div className={styles.title}>
							<h3>
								<span>D</span>onut<span>.</span>
							</h3>
						</div>
						<DonutOption
							title={{ name: 'Frutas Frescas', price: '30.00' }}
							extras={[
								{ name: 'Frutas fatiadas.', price: '1.80' },
								{ name: 'Amendoas e castanhas.', price: '1.50' },
								{
									name: 'Paçoca e biscoitos.',
									price: '2.00',
								},
							]}
							size={'normal'}
						/>
						<DonutOption
							title={{ name: 'Chocolate Branco', price: '35.00' }}
							size={'small'}
						/>
						<DonutOption
							title={{ name: 'Chocolate ao Leite', price: '38.00' }}
							size={'small'}
						/>
					</div>

					<div className={styles.button}>
						<Button text={'Enviar Pedido'} />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Pedidos

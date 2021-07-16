<script>
	import Section from '../components/section.svelte';
</script>

<div class='component-about'>
	<div class='component-about__content'>
		<h1>Sobre mi</h1>
		<div class='component-about__description'>
			<p>
				Soy un Desarrollador web Frontend con más de 5 años de experiencia. Me apasionan los <br />
				códigos de calidad, las mejores practicas, la seguridad y el rendimiento.
			</p>
			<p>
				Trabajo en proyectos frontends complejos con lenguajes y tecnologías nuevas, y también tengo <br />
				una comprensión decente del desarrollo del lado del servidor. Si bien disfruto experimentar con <br />
				nuevos frameworks y bibliotecas, entiendo la importancia de centrar la atención en el objetivo <br />
				final: entregar un producto hermoso y funcional al usuario/cliente.
			</p>
			<p>
				Veo cada experiencia nueva como una oportunidad para aprender. Mis proyectos favoritos son <br />
				aquellos que requieren que vaya más allá de mis limites y adquiera nuevas habilidades y <br />
				conocimientos para tener éxito.
			</p>
		</div>
	</div>
</div>
<Section title='Ahora'>
	Pronto ...
</Section>
<Section title='Frontend'>
	Pronto ...
</Section>
<Section title='Backend'>
	Pronto ...
</Section>

<style lang='scss'>
	.component-about {
		margin-top: 7rem;
		padding: 0 24px;

		h1 {
			color: var(--color-white-10);
			font-weight: var(--font-weight-bold);
			font-size: 48px;
			margin-bottom: 40px;
		}

		&__content {
			margin: 0 auto;
			width: 100%;
			max-width: var(--max-width-desktop);
		}

		&__description {
			p {
				color: var(--color-white-10);
				font-weight: var(--font-weight-light);
				font-size: 18px;
				line-height: 32px;
				margin-bottom: 16px;

				&:last-child {
					margin-bottom: 0;
				}
			}
		}
	}
</style>

<script>
	import LazyImage from '../components/lazy-image.svelte';
	import Section from '../components/section.svelte';

	const practicing = [
		{ name: 'svelte', image: 'front/dev-svelte.svg' },
		{ name: 'python', image: 'back/dev-python.svg' },
	]
	const controls = [
		{ name: 'dev-git', image: 'dev-git.svg' },
	]
	const frontends = [
		{ name: 'html5', image: 'dev-html5.svg' },
		{ name: 'css', image: 'dev-css.svg' },
		{ name: 'pug', image: 'dev-pug.svg' },
		{ name: 'sass', image: 'dev-sass.svg' },
		{ name: 'less', image: 'dev-less.svg' },
		{ name: 'styled-components', image: 'dev-styled-components.svg' },
		{ name: 'bootstrap', image: 'dev-bootstrap.svg' },
		{ name: 'bulma', image: 'dev-bulma.svg' },
		{ name: 'materialize', image: 'dev-materialize.svg' },
		{ name: 'javascript', image: 'dev-javascript.svg' },
		{ name: 'typescript', image: 'dev-typescript.svg' },
		{ name: 'react', image: 'dev-react.svg' },
		{ name: 'next', image: 'dev-next.svg' },
		{ name: 'redux', image: 'dev-redux.svg' },
		{ name: 'redux-saga', image: 'dev-redux-saga.svg' },
		{ name: 'gatsby', image: 'dev-gatsby.svg' },
		{ name: 'vue', image: 'dev-vue.svg' },
		{ name: 'angular', image: 'dev-angular.svg' },
		{ name: 'svelte', image: 'dev-svelte.svg', now: true },
		{ name: 'jest', image: 'dev-jest.svg' }
	];
	const backends = [
		{ name: 'nodejs', image: 'dev-nodejs.svg' },
		{ name: 'express', image: 'dev-express.svg' },
		{ name: 'apollo', image: 'dev-apollo.svg' },
		{ name: 'graphql', image: 'dev-graphql.svg' },
		{ name: 'firebase', image: 'dev-firebase.svg' },
		{ name: 'python', image: 'dev-python.svg', now: true },
	]
	const dbs = [
		{ name: 'mysql', image: 'dev-mysql.svg' },
		{ name: 'postgresql', image: 'dev-postgresql.svg' },
	]
	const repos = [
		{ name: 'github', image: 'dev-github.svg' },
		{ name: 'gitlab', image: 'dev-gitlab.svg' },
		{ name: 'bitbucket', image: 'dev-bitbucket.svg' },
	]
	const clouds = [
		{ name: 'netlify', image: 'dev-netlify.svg' },
		{ name: 'heroku', image: 'dev-heroku.svg' },
	]
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

<Section title='Ahora' description='practicando'>
	<div class='component-about__list-dev'>
		{#each practicing as { name, image }}
			<div class='component-about__list-dev__item'>
				<LazyImage image='/assets/{image}' name={name} width='56px' />
			</div>
		{/each}
	</div>
</Section>

<Section title='Control de Versiones'>
	<div class='component-about__list-dev'>
		{#each controls as { name, image }}
			<div class='component-about__list-dev__item'>
				<LazyImage image='/assets/control/{image}' name={name} width='56px' />
			</div>
		{/each}
	</div>
</Section>

<Section title='Frontend'>
	<div class='component-about__list-dev'>
		{#each frontends as { name, image, now }}
			<div class='component-about__list-dev__item {now ? "now" : ""}'>
				<LazyImage image='/assets/front/{image}' name={name} width='56px' />
			</div>
		{/each}
	</div>
</Section>

<Section title='Backend'>
	<div class='component-about__list-dev'>
		{#each backends as { name, image, now }}
			<div class='component-about__list-dev__item {now ? "now" : ""}'>
				<LazyImage image='/assets/back/{image}' name={name} width='56px' />
			</div>
		{/each}
	</div>
</Section>

<Section title='Base de Datos'>
	<div class='component-about__list-dev'>
		{#each dbs as { name, image }}
			<div class='component-about__list-dev__item'>
				<LazyImage image='/assets/db/{image}' name={name} width='56px' />
			</div>
		{/each}
	</div>
</Section>

<Section title='Alojamiento de Repositorios'>
	<div class='component-about__list-dev'>
		{#each repos as { name, image }}
			<div class='component-about__list-dev__item'>
				<LazyImage image='/assets/repo/{image}' name={name} width='56px' />
			</div>
		{/each}
	</div>
</Section>

<Section title='Computación en la Nube'>
	<div class='component-about__list-dev'>
		{#each clouds as { name, image }}
			<div class='component-about__list-dev__item'>
				<LazyImage image='/assets/cloud/{image}' name={name} width='56px' />
			</div>
		{/each}
	</div>
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

		&__list-dev {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(72px, 1fr));
			grid-gap: 24px;

			&__item {
				padding: 16px;
				border-radius: 8px;
				background-color: #FFF;
				height: 72px;
				display: flex;
				align-items: center;
				justify-content: center;

				&.now {
					opacity: .4;
				}
			}
		}
	}
</style>

<script>
	import LazyImage from '../components/lazy-image.svelte';
	import Section from '../components/section.svelte';

	const practicing = [
		{ name: 'svelte', image: 'front/dev-svelte.svg', url: 'https://svelte.dev/' },
		{ name: 'python', image: 'back/dev-python.svg', url: 'https://www.python.org/' },
	]
	const controls = [
		{ name: 'dev-git', image: 'dev-git.svg', url: 'https://git-scm.com/' },
	]
	const frontends = [
		{ name: 'html5', image: 'dev-html5.svg', url: 'https://developer.mozilla.org/es/docs/Web/HTML' },
		{ name: 'css', image: 'dev-css.svg', url: 'https://developer.mozilla.org/es/docs/Web/CSS' },
		{ name: 'pug', image: 'dev-pug.svg', url: 'https://pugjs.org/api/getting-started.html' },
		{ name: 'sass', image: 'dev-sass.svg', url: 'https://sass-lang.com/' },
		{ name: 'less', image: 'dev-less.svg', url: 'https://lesscss.org/' },
		{ name: 'styled-components', image: 'dev-styled-components.svg', url: 'https://styled-components.com/' },
		{ name: 'bootstrap', image: 'dev-bootstrap.svg', url: 'https://getbootstrap.com/' },
		{ name: 'ant-design', image: 'dev-ant-design.svg', url: 'https://ant.design/' },
		// { name: 'bulma', image: 'dev-bulma.svg', url: 'https://bulma.io/' },
		{ name: 'materialize', image: 'dev-materialize.svg', url: 'https://materializecss.com/' },
		{ name: 'javascript', image: 'dev-javascript.svg', url: 'https://developer.mozilla.org/es/docs/Web/JavaScript' },
		{ name: 'typescript', image: 'dev-typescript.svg', url: 'https://www.typescriptlang.org/' },
		{ name: 'react', image: 'dev-react.svg', url: 'https://reactjs.org/' },
		{ name: 'next', image: 'dev-next.svg', url: 'https://nextjs.org/' },
		{ name: 'redux', image: 'dev-redux.svg', url: 'https://redux.js.org/' },
		{ name: 'redux-saga', image: 'dev-redux-saga.svg', url: 'https://redux-saga.js.org/' },
		{ name: 'gatsby', image: 'dev-gatsby.svg', url: 'https://www.gatsbyjs.com/' },
		{ name: 'vue', image: 'dev-vue.svg', url: 'https://vuejs.org/' },
		{ name: 'angular', image: 'dev-angular.svg', url: 'https://angular.io/' },
		{ name: 'svelte', image: 'dev-svelte.svg', now: true, url: 'https://svelte.dev/' },
		{ name: 'jest', image: 'dev-jest.svg', url: 'https://jestjs.io/' }
	];
	const backends = [
		{ name: 'nodejs', image: 'dev-nodejs.svg', url: 'https://nodejs.org' },
		{ name: 'express', image: 'dev-express.svg', url: 'https://expressjs.com' },
		{ name: 'apollo', image: 'dev-apollo.svg', url: 'https://www.apollographql.com/docs/apollo-server/' },
		{ name: 'graphql', image: 'dev-graphql.svg', url: 'https://graphql.org/' },
		{ name: 'firebase', image: 'dev-firebase.svg', url: 'https://firebase.google.com/' },
		{ name: 'python', image: 'dev-python.svg', now: true, url: 'https://www.python.org/' },
	]
	const dbs = [
		{ name: 'mysql', image: 'dev-mysql.svg', url: 'https://www.mysql.com/' },
		{ name: 'postgresql', image: 'dev-postgresql.svg', url: 'https://www.postgresql.org/' },
	]
	const repos = [
		{ name: 'github', image: 'dev-github.svg', url: 'https://github.com/' },
		{ name: 'gitlab', image: 'dev-gitlab.svg', url: 'https://gitlab.com/' },
		{ name: 'bitbucket', image: 'dev-bitbucket.svg', url: 'https://bitbucket.org/' },
	]
	const clouds = [
		{ name: 'netlify', image: 'dev-netlify.svg', url: 'https://www.netlify.com/' },
		{ name: 'heroku', image: 'dev-heroku.svg', url: 'https://www.heroku.com/' },
		{ name: 'vercel', image: 'dev-vercel.svg', url: 'https://vercel.com/' },
	]
	const designs = [
		{ name: 'figma', image: 'dev-figma.svg', url: 'https://www.figma.com/' },
		{ name: 'zeplin', image: 'dev-zeplin.svg', url: 'https://zeplin.io/' },
		{ name: 'invision', image: 'dev-invision.svg', url: 'https://www.invisionapp.com/' },
		{ name: 'avocode', image: 'dev-avocode.svg', url: 'https://avocode.com/' },
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
		{#each practicing as { name, image, url }}
			<a
				href={url}
				target='_blank'
				class='component-about__list-dev__item'
			>
				<LazyImage image='/assets/{image}' name={name} width='56px' />
			</a>
		{/each}
	</div>
</Section>

<Section title='Control de Versiones'>
	<div class='component-about__list-dev'>
		{#each controls as { name, image, url }}
			<a
				href={url}
				target='_blank'
				class='component-about__list-dev__item'
			>
				<LazyImage image='/assets/control/{image}' name={name} width='56px' />
			</a>
		{/each}
	</div>
</Section>

<Section title='Frontend'>
	<div class='component-about__list-dev'>
		{#each frontends as { name, image, now, url }}
			<a
				href={url}
				target='_blank'
				class='component-about__list-dev__item {now ? "now" : ""}'
			>
				<LazyImage image='/assets/front/{image}' name={name} width='56px' />
			</a>
		{/each}
	</div>
</Section>

<Section title='Backend'>
	<div class='component-about__list-dev'>
		{#each backends as { name, image, now, url }}
			<a
				href={url}
				target='_blank'
				class='component-about__list-dev__item {now ? "now" : ""}'
			>
				<LazyImage image='/assets/back/{image}' name={name} width='56px' />
			</a>
		{/each}
	</div>
</Section>

<Section title='Base de Datos'>
	<div class='component-about__list-dev'>
		{#each dbs as { name, image, url }}
			<a
				href={url}
				target='_blank'
				class='component-about__list-dev__item'
			>
				<LazyImage image='/assets/db/{image}' name={name} width='56px' />
			</a>
		{/each}
	</div>
</Section>

<Section title='Alojamiento de Repositorios'>
	<div class='component-about__list-dev'>
		{#each repos as { name, image, url }}
			<a
				href={url}
				target='_blank'
				class='component-about__list-dev__item'
			>
				<LazyImage image='/assets/repo/{image}' name={name} width='56px' />
			</a>
		{/each}
	</div>
</Section>

<Section title='Computación en la Nube'>
	<div class='component-about__list-dev'>
		{#each clouds as { name, image, url }}
			<a
				href={url}
				target='_blank'
				class='component-about__list-dev__item'
			>
				<LazyImage image='/assets/cloud/{image}' name={name} width='56px' />
			</a>
		{/each}
	</div>
</Section>

<Section title='Diseño a Código'>
	<div class='component-about__list-dev'>
		{#each designs as { name, image, url }}
			<a
				href={url}
				target='_blank'
				class='component-about__list-dev__item'
			>
				<LazyImage image='/assets/design/{image}' name={name} width='56px' />
			</a>
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
			user-select: none;
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
				text-decoration: none;

				&.now {
					opacity: .4;
				}
			}
		}
	}
</style>

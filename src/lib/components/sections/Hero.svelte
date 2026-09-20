<script lang="ts">
	import { profile } from '$lib/data/cv';

	const icons: Record<string, string> = {
		Email:
			'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>',
		LinkedIn:
			'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
		GitHub:
			'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
		ORCID:
			'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.897 0 1.62.725 1.62 1.62 0 .896-.723 1.622-1.62 1.622-.896 0-1.619-.726-1.619-1.622 0-.895.723-1.62 1.619-1.62zm-1.34 5.043h2.68v10.646h-2.68V9.421zm4.844 0h4.115c3.927 0 5.652 2.847 5.652 5.328 0 2.917-2.28 5.317-5.652 5.317h-4.115V9.421zm2.68 2.28v6.05h1.31c2.71 0 3.383-2.108 3.383-3.03 0-1.658-1.002-3.02-3.395-3.02h-1.298z"/></svg>'
	};

	const iconColors: Record<string, string> = {
		Email: '#6b7280',
		LinkedIn: '#0a66c2',
		GitHub: '#181717',
		ORCID: '#a6ce39'
	};
</script>

<section id="about" class="section hero">
	<div class="hero-text">
		<h1>{profile.name}</h1>
		<p class="title">{profile.title}</p>
		<p class="subtitle">{profile.subtitle}</p>
		<p class="bio">{profile.bio}</p>
		<ul class="contacts">
			{#each profile.contacts as { label, href } (label)}
				<li>
					<a {href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
						<span class="icon" style="color: {iconColors[label]}">{@html icons[label]}</span>
						{label}
					</a>
				</li>
			{/each}
		</ul>
	</div>
	<img class="hero-photo" src="/profile.jpg" alt={profile.name} />
</section>

<style>
	.hero {
		padding-top: 5rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2.5rem;
	}

	.hero-text {
		flex: 1;
		min-width: 0;
	}

	.hero-photo {
		width: 275px;
		height: 275px;
		border-radius: 50%;
		object-fit: cover;
		flex-shrink: 0;
		border: 3px solid var(--color-surface);
		box-shadow: 0 0 0 1px var(--color-border);
	}

	@media (max-width: 640px) {
		.hero {
			flex-direction: column-reverse;
			text-align: center;
			gap: 1.5rem;
		}

		.hero-photo {
			width: 190px;
			height: 190px;
		}

		.contacts {
			justify-content: center;
		}
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 700;
	}

	.title {
		margin-top: 0.75rem;
		font-size: 1.15rem;
		font-weight: 600;
		color: var(--color-accent);
	}

	.subtitle {
		margin-top: 0.15rem;
		color: var(--color-text-muted);
	}

	.bio {
		margin-top: 1.25rem;
		max-width: 640px;
	}

	.contacts {
		margin: 1.75rem 0 0;
		padding: 0;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.contacts a {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.45rem 1rem;
		border: 1px solid var(--color-border);
		border-radius: 999px;
		font-size: 0.9rem;
		font-weight: 500;
		text-decoration: none;
		color: var(--color-text);
		background: var(--color-surface);
	}

	.icon {
		display: inline-flex;
		width: 1rem;
		height: 1rem;
	}

	.icon :global(svg) {
		width: 100%;
		height: 100%;
	}

	.contacts a:hover {
		border-color: var(--color-accent);
		color: var(--color-accent);
	}
</style>

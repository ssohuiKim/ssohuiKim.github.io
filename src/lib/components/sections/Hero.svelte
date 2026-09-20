<script lang="ts">
	import { profile } from '$lib/data/cv';
</script>

<section id="about" class="section hero">
	<h1>{profile.name}</h1>
	<p class="title">{profile.title}</p>
	<p class="subtitle">{profile.subtitle}</p>
	<p class="bio">{profile.bio}</p>
	<ul class="contacts">
		{#each profile.contacts as { label, href } (label)}
			<li><a {href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{label}</a></li>
		{/each}
	</ul>
</section>

<style>
	.hero {
		padding-top: 5rem;
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
		display: inline-block;
		padding: 0.45rem 1rem;
		border: 1px solid var(--color-border);
		border-radius: 999px;
		font-size: 0.9rem;
		font-weight: 500;
		text-decoration: none;
		color: var(--color-text);
		background: var(--color-surface);
	}

	.contacts a:hover {
		border-color: var(--color-accent);
		color: var(--color-accent);
	}
</style>

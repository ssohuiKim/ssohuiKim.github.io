<script lang="ts">
	import type { PublicationEntry } from '$lib/data/cv';
	import { publications, conferences } from '$lib/data/cv';
</script>

{#snippet pubItem(pub: PublicationEntry)}
	<li>
		<span class="authors">{pub.authors}</span>
		{#if pub.link}
			<a class="pub-title" href={pub.link} target="_blank" rel="noreferrer">"{pub.title}"</a>
		{:else}
			"{pub.title}"
		{/if}
		<span class="venue">{pub.venue}</span>
	</li>
{/snippet}

<section id="publications" class="section">
	<h2 class="section-title">Publications</h2>

	<h3 class="group-title">First Author</h3>
	<ol class="pubs">
		{#each publications.firstAuthor as pub (pub.title)}
			{@render pubItem(pub)}
		{/each}
	</ol>

	<h3 class="group-title">Co-Author</h3>
	<ol class="pubs">
		{#each publications.coAuthor as pub (pub.title)}
			{@render pubItem(pub)}
		{/each}
	</ol>

	<h3 class="group-title conference-title">Conference Presentations</h3>
	<div class="list">
		{#each conferences as talk (talk.title)}
			<div class="card talk">
				<div class="talk-text">
					<span class="type">{talk.type}</span>
					<p class="talk-title">"{talk.title}"</p>
					<p class="venue-line">{talk.venue}</p>
					{#if talk.award}
						<p class="award">{talk.award}</p>
					{/if}
				</div>
				{#if talk.photo}
					<img class="talk-photo" src={talk.photo} alt={talk.title} loading="lazy" />
				{/if}
			</div>
		{/each}
	</div>
</section>

<style>
	.group-title {
		font-size: 0.95rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--color-text-muted);
		margin: 2rem 0 0.75rem;
	}

	.group-title:first-of-type {
		margin-top: 0;
	}

	.conference-title {
		margin-top: 3.5rem;
	}

	.pubs {
		margin: 0;
		padding-left: 1.25rem;
	}

	.pubs li {
		margin-bottom: 0.85rem;
	}

	.authors {
		font-weight: 600;
	}

	.pub-title {
		color: var(--color-text);
		text-decoration: none;
	}

	.pub-title:hover {
		color: var(--color-accent);
		text-decoration: underline;
	}

	.venue {
		display: block;
		color: var(--color-text-muted);
		font-size: 0.9rem;
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.talk {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.talk-text {
		flex: 1;
		min-width: 0;
	}

	.talk-photo {
		width: 96px;
		height: 96px;
		border-radius: 8px;
		object-fit: cover;
		flex-shrink: 0;
		border: 1px solid var(--color-border);
	}

	@media (max-width: 560px) {
		.talk-photo {
			width: 64px;
			height: 64px;
		}
	}

	.type {
		font-size: 0.8rem;
		font-weight: 700;
		color: var(--color-accent);
	}

	.talk-title {
		margin: 0.4rem 0 0;
		font-weight: 500;
	}

	.venue-line {
		margin: 0.25rem 0 0;
		color: var(--color-text-muted);
		font-size: 0.9rem;
	}

	.award {
		display: inline-block;
		margin: 0.6rem 0 0;
		padding: 0.3rem 0.75rem;
		border-radius: 999px;
		background: var(--color-accent-soft);
		color: var(--color-accent);
		font-weight: 700;
		font-size: 0.85rem;
	}
</style>

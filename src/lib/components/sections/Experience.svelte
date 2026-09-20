<script lang="ts">
	import { researchExperience } from '$lib/data/cv';
</script>

<section id="experience" class="section">
	<h2 class="section-title">Research Experience</h2>
	<div class="list">
		{#each researchExperience as entry, i (entry.title)}
			<a class="card entry" href="/projects/{entry.slug}">
				<h3>{i + 1}. {entry.title}</h3>
				{#if entry.collaboration}
					<p class="collab">{entry.collaboration}</p>
				{/if}
				<ul>
					{#each entry.bullets as bullet}
						<li>{bullet}</li>
					{/each}
				</ul>
			</a>
		{/each}
	</div>
</section>

<style>
	.list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.entry {
		display: block;
		color: inherit;
		text-decoration: none;
		transition: border-color 0.15s, box-shadow 0.15s;
	}

	.entry:hover {
		border-color: var(--color-accent);
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
	}

	h3 {
		font-size: 1.05rem;
	}

	.collab {
		margin: 0.35rem 0 0;
		font-style: italic;
		color: var(--color-text-muted);
		font-size: 0.9rem;
	}

	ul {
		margin: 0.75rem 0 0;
		padding-left: 1.25rem;
	}

	li {
		margin-bottom: 0.4rem;
	}
</style>

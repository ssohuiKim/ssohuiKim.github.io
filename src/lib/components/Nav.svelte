<script lang="ts">
	import { navSections } from '$lib/data/cv';

	let activeId = $state(navSections[0].id);

	$effect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						activeId = entry.target.id;
					}
				}
			},
			{ rootMargin: '-45% 0px -50% 0px' }
		);

		for (const { id } of navSections) {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		}

		return () => observer.disconnect();
	});
</script>

<nav>
	<ol>
		{#each navSections as { id, label } (id)}
			<li>
				<a href="#{id}" class:active={activeId === id}>{label}</a>
			</li>
		{/each}
	</ol>
</nav>

<style>
	nav {
		position: sticky;
		top: 0;
		z-index: 10;
		background: rgba(251, 250, 248, 0.9);
		backdrop-filter: blur(6px);
		border-bottom: 1px solid var(--color-border);
	}

	ol {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 0 1.5rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem 1.25rem;
		list-style: none;
	}

	a {
		display: inline-block;
		padding: 0.9rem 0;
		font-size: 0.9rem;
		font-weight: 500;
		color: var(--color-text-muted);
		text-decoration: none;
		border-bottom: 2px solid transparent;
	}

	a:hover {
		color: var(--color-text);
	}

	a.active {
		color: var(--color-accent);
		border-bottom-color: var(--color-accent);
	}
</style>

<script lang="ts">
	import { skills } from '$lib/data/cv';
</script>

<section id="skills" class="section">
	<h2 class="section-title">Skills</h2>
	<div class="groups">
		{#each skills as group (group.category)}
			<div class="group">
				<h3>{group.category}</h3>
				<div class="badges">
					{#each group.items as item (item)}
						<span class="badge">{item}</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.groups {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	h3 {
		font-size: 0.9rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--color-text-muted);
		margin-bottom: 0.6rem;
	}

	.badges {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.badge {
		padding: 0.35rem 0.85rem;
		border-radius: 999px;
		background: var(--color-accent-soft);
		color: var(--color-text);
		font-size: 0.85rem;
		font-weight: 500;
	}
</style>

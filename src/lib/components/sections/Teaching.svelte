<script lang="ts">
	import { teaching } from '$lib/data/cv';
</script>

<section id="teaching" class="section">
	<h2 class="section-title">Teaching Experience</h2>
	<div class="list">
		{#each teaching as entry, i (entry.course + entry.period)}
			<div class="row">
				<span class="role">{entry.role}</span>
				<span class="course">{entry.course}</span>
				<span class="period">{entry.period}</span>
			</div>
		{/each}
	</div>
</section>

<style>
	.list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.row {
		display: grid;
		grid-template-columns: 9rem 1fr auto;
		gap: 1rem;
		align-items: baseline;
		padding-bottom: 0.75rem;
		border-bottom: 1px solid var(--color-border);
	}

	.role {
		font-weight: 600;
		color: var(--color-accent);
		font-size: 0.9rem;
	}

	.period {
		font-size: 0.85rem;
		color: var(--color-text-muted);
		white-space: nowrap;
	}

	@media (max-width: 560px) {
		.row {
			grid-template-columns: 1fr;
			gap: 0.25rem;
		}
	}
</style>

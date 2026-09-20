<script lang="ts">
	import { education } from '$lib/data/cv';
</script>

<section id="education" class="section">
	<h2 class="section-title">Education</h2>
	<div class="timeline">
		{#each education as entry (entry.degree + entry.period)}
			<div class="entry">
				<div class="marker">
					<span class="dot"></span>
					<span class="line"></span>
				</div>
				<div class="content">
					<span class="degree">{entry.degree}</span>
					<h3>{entry.school}</h3>
					<p class="period">{entry.period}</p>
					<p class="department">{entry.department}</p>
					{#if entry.detail}
						<p class="detail">
							{entry.detail}
							{#if entry.link}
								<a href={entry.link.href} target="_blank" rel="noreferrer">({entry.link.label})</a>
							{/if}
						</p>
					{/if}
					<p class="gpa">{entry.gpa}</p>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.timeline {
		display: flex;
		flex-direction: column;
	}

	.entry {
		display: grid;
		grid-template-columns: 1.5rem 1fr;
		column-gap: 1.25rem;
	}

	.marker {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.dot {
		width: 0.75rem;
		height: 0.75rem;
		border-radius: 50%;
		background: var(--color-accent);
		margin-top: 0.4rem;
		flex-shrink: 0;
	}

	.line {
		flex: 1;
		width: 2px;
		background: var(--color-border);
		margin-top: 0.35rem;
	}

	.entry:last-child .line {
		display: none;
	}

	.content {
		padding-bottom: 2.5rem;
	}

	.degree {
		display: inline-block;
		font-size: 0.75rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		color: var(--color-accent);
		background: var(--color-accent-soft);
		padding: 0.15rem 0.6rem;
		border-radius: 999px;
	}

	h3 {
		margin-top: 0.5rem;
		font-size: 1.1rem;
	}

	.period {
		margin: 0.2rem 0 0;
		font-size: 0.85rem;
		color: var(--color-text-muted);
	}

	.department,
	.detail {
		margin: 0.5rem 0 0;
		color: var(--color-text-muted);
	}

	.gpa {
		margin: 0.4rem 0 0;
		font-weight: 500;
	}
</style>

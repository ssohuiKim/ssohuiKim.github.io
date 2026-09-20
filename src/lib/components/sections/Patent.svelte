<script lang="ts">
	import { patents } from '$lib/data/cv';
</script>

<section id="patent" class="section">
	<h2 class="section-title">Patent</h2>
	<ul class="list">
		{#each patents as item (item)}
			<li>{item}</li>
		{/each}
	</ul>
</section>

<style>
	.list {
		margin: 0;
		padding-left: 1.25rem;
	}

	.list li {
		margin-bottom: 0.5rem;
	}
</style>

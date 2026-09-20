<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import Education from '$lib/components/sections/Education.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
	import Publications from '$lib/components/sections/Publications.svelte';
	import Skills from '$lib/components/sections/Skills.svelte';
	import Patent from '$lib/components/sections/Patent.svelte';
	import Teaching from '$lib/components/sections/Teaching.svelte';
	import { profile } from '$lib/data/cv';
</script>

<svelte:head>
	<title>{profile.name} — CV</title>
	<meta name="description" content={profile.bio} />
</svelte:head>

<Nav />
<Hero />
<Education />
<Publications />
<Experience />
<Skills />
<Patent />
<Teaching />

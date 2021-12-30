<script>
	import NavLink from './NavLink.svelte';

	let isDark = false;
	if (typeof localStorage !== 'undefined') {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			isDark = true;
		}
	}
	function toggleDarkMode() {
		if (isDark) {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
			isDark = false;
		} else {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
			isDark = true;
		}
	}
</script>

<nav
	class="flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16 text-gray-900 bg-gray-50 dark:bg-gray-900 bg-opacity-60 dark:text-gray-100"
>
	<a href="#skip" class="skip-nav">Skip to content</a>
	<ul class="ml-[-0.60rem] flex">
		<li><NavLink href="/">Home</NavLink></li>
		<li><NavLink href="/blog">Blog</NavLink></li>
		<li><NavLink href="https://github.com/sw-yx/swyxkit">GitHub</NavLink></li>
	</ul>
	<button
		aria-label="Toggle Dark Mode"
		class="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all"
		on:click={toggleDarkMode}
	>
		{#if isDark}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				class="w-5 h-5 text-gray-800 dark:text-gray-200"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
				/></svg
			>
		{:else}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				class="w-5 h-5 text-gray-800 dark:text-gray-200"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
				/></svg
			>
		{/if}
	</button>
</nav>
<!-- <div class="flex h-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500" /> -->

<!-- <div class="sm:flex justify-between">
		<a sveltekit:prefetch href="/" class="text-3xl font-bold p-3">Site Name</a>
		<div class="LeftNav hidden md:block">
			<a sveltekit:prefetch href="/" class="text-3xl font-bold p-3">Site Name</a>
		</div>
		<div class="sm:flex RightNav">
			<ul class="flex justify-center sm:items-center text-xl">
				<li class="sm:inline-block">
					<a href="#" class="p-3 link">About</a>
				</li>
				<li class="sm:inline-block relative">
					<a sveltekit:prefetch href="/blog" class="p-3 nav-link">Blog</a>
				</li>
				<li class="sm:inline-block relative">
					<a href="https://github.com/sw-yx/swyxkit" class="p-3 nav-link">GitHub</a>
				</li>
			</ul>
		</div>
		<button
			aria-label="Toggle Dark Mode"
			class="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all"
			on:click={toggleDarkMode}>
			{#if isDark}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-5 h-5 text-gray-800 dark:text-gray-200"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
			{:else}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-5 h-5 text-gray-800 dark:text-gray-200"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
			{/if}
			</button
		>
	</div> -->
<style>
	.skip-nav {
		position: absolute;
		left: -25%;
		top: -2rem;
		--tw-translate-y: -3rem;
		padding: 0.75rem 1rem;
		transition-property: transform;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 0.2s;
	}
	/* .nav-link {
		@apply dark:hover:text-blue-100 hover:text-blue-400 
	} */
	/* Nav link pseudos */
	.nav-link:hover {
		--nav-scale: 1;
	}
	.nav-link:after,
	.nav-link:before {
		content: '';
		width: 100%;
		position: absolute;
		transition: transform 150ms;
		height: 2px;
		background: var(--brand-accent);
		transform: scale(var(--nav-scale, 0));
	}

	.nav-link:after {
		bottom: 100%;
		left: 0;
		transform-origin: 0 50%;
	}

	.nav-link:before {
		top: calc(100% + 2px);
		right: 0;
		transform-origin: 100% 50%;
	}
</style>

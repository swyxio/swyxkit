<script>
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

<nav class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50 p-4 border-b-thick dark:border-0">
	<div class="sm:flex justify-between">
		<div class="LeftNav hidden md:block">
			<a sveltekit:prefetch href="/" class="text-3xl font-bold p-3">Site Name</a>
		</div>
		<div class="sm:flex RightNav">
			<ul class="flex justify-center sm:items-center text-xl">
				<!-- <li class="sm:inline-block">
					<a href="#" class="p-3 link">About</a>
				</li> -->
				<li class="sm:inline-block">
					<a sveltekit:prefetch href="/blog" class="p-3 link">Blog</a>
				</li>
				<li class="sm:inline-block">
					<a href="https://github.com/sw-yx/swyxkit" class="p-3 link">GitHub</a>
				</li>
				<li class="sm:inline-block">
					<button on:click={toggleDarkMode}>{isDark ? '😎' : '🌙'}</button>
				</li>
			</ul>
		</div>
	</div>
</nav>
<div class="flex h-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"/>
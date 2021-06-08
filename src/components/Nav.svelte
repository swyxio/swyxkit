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

<nav class="bg-white text-gray-900 p-4 border-b-thick">
	<div class="sm:flex justify-between">
		<div class="LeftNav hidden md:block">
			<a href="#" class="text-3xl font-bold p-3">Site Name</a>
		</div>
		<div class="sm:flex RightNav">
			<ul class="flex justify-center sm:items-center text-xl">
				<li class="sm:inline-block">
					<a href="#" class="p-3 hover:text-red-900">About</a>
				</li>
				<li class="sm:inline-block">
					<a href="#" class="p-3 hover:text-red-900">Blog</a>
				</li>
				<li class="sm:inline-block">
					<a href="#" class="p-3 hover:text-red-900">Contact</a>
				</li>
				<li class="sm:inline-block">
					<button on:click={toggleDarkMode}>{isDark ? '😎' : '🌙'}</button>
				</li>
			</ul>
		</div>
	</div>
</nav>
<div class="flex h-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"/>
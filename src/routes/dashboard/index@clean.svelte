<script>
	let sidebarOpen = false;
	import {darkModeStore} from 'everything-store';

	const darkModeState = darkModeStore()
</script>

{#if sidebarOpen}
	<div class="relative z-40 md:hidden">
		<div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
		<div class="fixed inset-0 z-40 flex">
			<div class="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800">
				<div class="absolute top-0 right-0 -mr-12 pt-2">
					<button
						type="button"
						class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
						on:click={() => (sidebarOpen = false)}
					>
						<span class="sr-only">Close sidebar</span>
						XIcon
						<!-- <XIcon class="h-6 w-6 text-white" aria-hidden="true" /> -->
					</button>
				</div>

				<div class="h-0 flex-1 overflow-y-auto pt-5 pb-4">
					<div class="flex flex-shrink-0 items-center px-4">
						<img
							class="h-8 w-auto rounded-full"
							src="https://user-images.githubusercontent.com/6764957/155878702-d2c779e9-e932-4c33-aa43-d50401b4699b.png"
							alt="SwyxKit"
						/>
					</div>
					<nav class="mt-5 space-y-1 px-2">
						NAVIGATION MAP
						<!-- {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'group flex items-center px-2 py-2 text-base font-medium rounded-md'
              )}
            >
              <item.icon
                className={classNames(
                  item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
                  'mr-4 flex-shrink-0 h-6 w-6'
                )}
                aria-hidden="true"
              />
              {item.name}
            </a>
          ))} -->
					</nav>
				</div>
				<div class="flex flex-shrink-0 bg-gray-700 p-4">
					<a href="#" class="group block flex-shrink-0">
						<div class="flex items-center">
							<div>
								<img
									class="inline-block h-10 w-10 rounded-full"
									src="https://pbs.twimg.com/profile_images/421387946315378688/GNykRzmj_400x400.png"
									alt=""
								/>
							</div>
							<div class="ml-3">
								<p class="text-base font-medium text-white">Itay Donanhirsh</p>
								<p class="text-sm font-medium text-gray-400 group-hover:text-gray-300">
									View profile
								</p>
							</div>
						</div>
					</a>
				</div>
			</div>
			<div class="w-14 flex-shrink-0">
				<!-- {/* Force sidebar to shrink to fit close icon */} -->
			</div>
		</div>
	</div>
{/if}

<!-- Static sidebar for desktop -->
<div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
	<!-- Sidebar component, swap this element with another sidebar if you like -->
	<div class="flex min-h-0 flex-1 flex-col bg-gray-800">
		<div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
			<div class="flex flex-shrink-0 items-center px-4">
				<img
					class="h-8 w-8 rounded-full"
					src="https://user-images.githubusercontent.com/6764957/155878727-e91b479a-8fae-49cf-91e9-404bd611f9a8.png"
					alt="SwyxKit"
				/>
				<span class="ml-2 font-bold uppercase tracking-wider text-white">swyxkit</span>
				<button
					aria-label="Toggle Dark Mode"
					class="ml-1 flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-400 ring-yellow-400
					transition-all hover:ring-2 dark:bg-yellow-800"
					on:click={darkModeState.toggleDark}
				>
					{#if $darkModeState !== 'dark'}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							class="h-5 w-5 text-gray-800 dark:text-yellow-100"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728
								0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
							/>
						</svg>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							class="w-5 h-5 text-gray-800 dark:text-gray-200"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
							/>
						</svg>
					{/if}
				</button>
			</div>
			<nav class="mt-5 flex-1 space-y-1 px-2">
				<a
					href={'/tbc'}
					class={'group flex items-center rounded-md bg-gray-900 px-2 py-2 text-sm font-medium text-white'}
				>
					foobar
					<!-- <item.icon
            class={'text-gray-300 mr-3 flex-shrink-0 h-6 w-6'}
            aria-hidden="true"
          />
          {item.name} -->
				</a>
				<!-- <a
          key={item.name}
          href={item.href}
          class={classNames(
            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
          )}
        >
          <item.icon
            class={classNames(
              item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
              'mr-3 flex-shrink-0 h-6 w-6'
            )}
            aria-hidden="true"
          />
          {item.name}
        </a> -->
			</nav>
		</div>
		<div class="flex flex-shrink-0 bg-gray-700 p-4">
			<a href="#" class="group block w-full flex-shrink-0">
				<div class="flex items-center">
					<div>
						<img
							class="inline-block h-9 w-9 rounded-full"
							src="https://pbs.twimg.com/profile_images/421387946315378688/GNykRzmj_400x400.png"
							alt=""
						/>
					</div>
					<div class="ml-3">
						<p class="text-sm font-medium text-white">Itay Donanhirsh</p>
						<p class="text-xs font-medium text-gray-300 group-hover:text-gray-200">View profile</p>
					</div>
				</div>
			</a>
		</div>
	</div>
</div>
<div class="flex flex-1 flex-col md:pl-64">
	<div class="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
		<button
			type="button"
			class="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
			on:click={() => (sidebarOpen = true)}
		>
			<span class="sr-only">Open sidebar</span>
			MENUICON
			<!-- <MenuIcon class="h-6 w-6" aria-hidden="true" /> -->
		</button>
	</div>
	<main class="flex-1">
		<div class="py-6">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<h1 class="text-2xl font-semibold dark:text-white text-gray-900">Dashboard</h1>
			</div>
			<div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
				<!-- {/* Replace with your content */} -->
				<div class="py-4">
					<div class="h-96 rounded-lg border-4 border-dashed border-gray-200" />
				</div>
				<!-- {/* /End replace */} -->
			</div>
		</div>
	</main>
</div>

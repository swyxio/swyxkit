<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;


    @layer components {
        .border-b-thick {
            @apply border-b-4 border-black dark:border-gray-50;
        }
        .border-x-thick {
            @apply md:border-l-4 md:border-r-4 border-black  dark:border-gray-50;
        }
    }
</style>

<slot></slot>
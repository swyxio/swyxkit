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
        .link {
            @apply dark:text-blue-300 dark:hover:text-blue-100 text-blue-600 hover:text-blue-400 hover:underline
        }
        body {
            --brand-accent: #00b7ff;
        }
    }

</style>

<slot></slot>
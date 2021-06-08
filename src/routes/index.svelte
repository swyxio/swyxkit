<script>
    import Nav from '../components/Nav.svelte'

    // meta tags
    let Title = "swyxkit"
    let Description = "swyx's default SvelteKit + Tailwind starter"
    let ogImage = "https://opengraph.githubassets.com/5fa65e3ceb548d54756a8a3b6e8ca0cace69e1515bd2641b81c88d24c0a9066b/sw-yx/swyxdotio"
</script>

<svelte:head>
    <title>{Title}</title>
    <link rel="canonical" href="https://swyx.io/" />
    <link rel="alternate" type="application/rss+xml" href="https://swyx.io/rss.xml" />
    <meta property="og:url" content="https://www.swyx.io/" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={Title} />
    <meta name="Description" content={Description} />
    <meta property="og:description" content={Description} />
    <meta property="og:image" content={ogImage} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content="https://twitter.com/swyx/" />
    <meta name="twitter:title" content={Title} />
    <meta name="twitter:description" content={Description} />
    <meta name="twitter:image" content={ogImage} />
</svelte:head>

<main class="max-h-[800px] md:h-screen border-b-thick">
    <Nav />
    <div class="md:h-full grid grid-cols-1 grid-rows-1 place-items-center p-8">
        <div>
            <h1 class="text-4xl md:text-8xl">This is the title</h1>
            <h2 class="text-xl md:text-3xl italic">This is a slightly longer tagline that lines up</h2>
        </div>
    </div>
</main>

<section class="border-b-thick bg-yellow-100 dark:bg-gray-900">
    <div class="container mx-auto border-black border-x-thick bg-gray-50 dark:bg-gray-900 p-8">
        <h2 class="text-5xl mb-8">This is a section</h2>
        <p class="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, deserunt quis pariatur necessitatibus consequuntur dolore excepturi rem sint corrupti itaque, cum ratione laboriosam totam maxime quia possimus incidunt eum ipsa.</p>
        <p class="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, deserunt quis pariatur necessitatibus consequuntur dolore excepturi rem sint corrupti itaque, cum ratione laboriosam totam maxime quia possimus incidunt eum ipsa.</p>
        <p class="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, deserunt quis pariatur necessitatibus consequuntur dolore excepturi rem sint corrupti itaque, cum ratione laboriosam totam maxime quia possimus incidunt eum ipsa.</p>
    </div>
</section>


<section class="border-b-thick h-12">
</section>

<section class="border-b-thick">
    <div class="p-8">
        <h2 class="text-5xl mb-8">This is a full bleed section</h2>
        <p class="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, deserunt quis pariatur necessitatibus consequuntur dolore excepturi rem sint corrupti itaque, cum ratione laboriosam totam maxime quia possimus incidunt eum ipsa.</p>
        <p class="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, deserunt quis pariatur necessitatibus consequuntur dolore excepturi rem sint corrupti itaque, cum ratione laboriosam totam maxime quia possimus incidunt eum ipsa.</p>
        <p class="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, deserunt quis pariatur necessitatibus consequuntur dolore excepturi rem sint corrupti itaque, cum ratione laboriosam totam maxime quia possimus incidunt eum ipsa.</p>
    </div>
</section>

<footer class="flex pt-16 justify-between p-8">
    <div class="LeftFooter">
        <ul class="flex flex-col">
            <li class="link">Made with 🧡 </li>
            <li class="link">Contact email here </li>
            <li class="link">About</li>
        </ul>
    </div>
    <div class="RightFooter">
        <ul class="flex flex-col">
            <li class="link">swyx © 2021</li>
            <li class="link">swyx</li>
        </ul>
    </div>

</footer>
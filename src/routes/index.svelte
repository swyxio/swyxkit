<script>
    import Nav from '../components/Nav.svelte'
</script>

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
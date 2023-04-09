<template>
    <div class="fixed w-full top-0 z-10">
        <div class="lg:container mx-auto">
            <nav class="text-right mr-1 mt-2">
                <a href="/">HOME</a>
                <a href="/project" class="ml-2">PROJECTS</a>
                <a href="/contact" class="ml-2">CONTACT</a>
            </nav>
        </div>
    </div>
    
    <div class="lg:container mx-auto px-4 py-12">
        <div v-for="pageNumber in 10">
            <div class="mb-4">
            <NuxtLink :to="{ path: '/detail/' + pageNumber }" >
                <div class="grid grid-cols-2 grid-rows-2 gap-4">
                    <div class="flex items-center">
                        <div class="text-5xl font-semibold text-gray-400">{{ pageNumber.toString().padStart(2, '0') }}. 프로젝트</div>
                    </div>
                    <div class="row-span-2 bg-cover bg-center h-80 shadow-lg shadow-gray-500/50" style="background-image: url(images/project.jpg)"></div>
                    <div class="text-xl text-gray-500">
                        <p>nodeJS</p>
                        <p>vue.js</p>
                        <p>nuxt.js</p>
                        <p>tailwind.css</p>
                    </div>
                </div>
            </NuxtLink>
            </div>
        </div>
    </div>
    
    <footer>
        <div class="lg:container mx-auto block text-center">
            <!-- <div class="flex justify-center">
                <div class="w-10 h-10">
                    <a href="https://github.com/rsh8040">
                        <img src="images/git-hub.png" alt="github" />
                    </a>
                </div>
            </div> -->
            <div>© 2023. Elly. All rights reserved.</div>
        </div>
    </footer>
</template>
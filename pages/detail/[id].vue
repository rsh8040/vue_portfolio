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
    
    <div class="lg:container mx-auto px-4 py-2">
        <div class="mb-12">
            <p class="pb-4 text-6xl text-gray-200">0{{ pageNumber }}.</p>
            <p class="pb-2 text-3xl text-gray-500">프로젝트 {{ pageNumber }}</p>
            <div class="pb-2 text-gray-500">사내 프로젝트</div>
        </div>
        
        <div class="grid grid-cols-2 grid-rows-1 gap-4 mb-12">
            <div class="text-xl text-gray-500">
                <p class="mb-12">2022월03일~2022년04일</p>
                <p>nodeJS</p>
                <p>vue.js</p>
                <p>nuxt.js</p>
                <p>tailwind.css</p>
            </div>
            <div class="bg-cover bg-center h-96 shadow-lg shadow-gray-500/50" style="background-image: url(/images/project.jpg)"></div>
        </div>
        
        <div class="mb-12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</div>
        
        <div class="mb-12">
            <div class="bg-cover bg-center h-96 shadow-lg shadow-gray-500/50 mb-4" style="background-image: url(/images/project.jpg)"></div>
            <div class="bg-cover bg-center h-96 shadow-lg shadow-gray-500/50 mb-4" style="background-image: url(/images/project.jpg)"></div>
            <div class="bg-cover bg-center h-96 shadow-lg shadow-gray-500/50 mb-4" style="background-image: url(/images/project.jpg)"></div>
            <div class="bg-cover bg-center h-96 shadow-lg shadow-gray-500/50 mb-4" style="background-image: url(/images/project.jpg)"></div>
            <div class="bg-cover bg-center h-96 shadow-lg shadow-gray-500/50 mb-4" style="background-image: url(/images/project.jpg)"></div>
            <div class="bg-cover bg-center h-96 shadow-lg shadow-gray-500/50 mb-4" style="background-image: url(/images/project.jpg)"></div>
        </div>
        
        <div class="flex mb-12" :class="{ 'justify-end': 1 == pageNumber, 'justify-start': 5 == pageNumber, 'justify-between': 1 < pageNumber && 5 > pageNumber }">
            <div v-if="1 != pageNumber">
                <NuxtLink :to="{ path: '/detail/'+(pageNumber - 1) }" >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="gray" stroke-width="1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                    </svg>
                </NuxtLink>
            </div>
            <div v-if="5 > pageNumber">
                <NuxtLink :to="{ path: '/detail/'+(pageNumber + 1) }" >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="gray" stroke-width="1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </NuxtLink>
            </div>
        </div>
    </div>

    <footer>
        <div class="lg:container mx-auto block text-center">
            <div class="flex justify-center">
                <div class="w-10 h-10">
                    <a href="https://github.com/rsh8040">
                        <img src="/images/git-hub.png" alt="github" />
                    </a>
                </div>
            </div>
            <div>© 2023. Elly. All rights reserved.</div>
        </div>
    </footer>
</template>

<script setup>

const route = useRoute()
const pageNumber = parseInt(route.params.id)

</script>
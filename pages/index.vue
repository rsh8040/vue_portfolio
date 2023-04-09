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
        <div class="grid grid-cols-2 grid-rows-2 gap-4 mb-12">
            <div class="row-span-2">
                <div class="text-2xl break-normal leading-9">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </div>
            <div class="relative">
                <div class="absolute px-3 py-3 right-0 rounded-md shadow-lg shadow-gray-500/50 bg-gray-100 opacity-70">
                    <div class="grid grid-cols-2 grid-row-2 gap-2">
                        <div class="text-center">안성시</div>
                        <div class="text-center">대기질</div>
                        <div class="text-center text-3xl">15℃</div>
                        <div class="flex justify-center items-center">
                            <div class="w-4 h-4 bg-green-700 border border-green-700 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class=""></div>
        </div>

        <div class="mb-12">
            <div v-for="(pageNumber, index) in 3" >
                <div class="flex flex-row" :class="{'flex flex-row-reverse' : 1 == index}">
                    <div class="basis-1/2 bg-cover bg-center h-80 mx-10 my-4 shadow-lg shadow-gray-500/50" style="background-image: url(images/project.jpg)"></div>
                    <div class="basis-1/2 flex justify-center mx-10 my-4">
                        <div class="flex flex-col justify-center">
                            <div>
                                <h2 class="text-2xl font-bold text-gray-400 mb-4">프로젝트{{ pageNumber }}</h2>
                                <p>
                                    <NuxtLink :to="{ path: '/detail/' + pageNumber }" ><button>더보기</button></NuxtLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 grid-rows-5 gap-4 mb-12">
            <div class="row-span-2 text-7xl text-center">CONTACT ME</div>
            <div></div>
            <div>
                <label for="name" class="block text-sm font-medium leading-6 text-gray-900">YOUR NAME</label>
                <div class="mt-2">
                    <input type="text" name="name" id="name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder=" you">
                </div>
            </div>
            <div class="row-span-3 text-center">
                <div class="text-xl">limsuhyeon8040@gmail.com</div>
            </div>
            <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">YOUR EMAIL</label>
                <div class="mt-2">
                    <input type="email" name="email" id="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder=" you@example.com">
                </div>
            </div>
            <div>
                <label for="message" class="block text-sm font-medium leading-6 text-gray-900">YOUR MESSAGE</label>
                <div class="mt-2">
                    <input type="text" name="message" id="message" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder=" text your message">
                </div>
            </div>
            <button class="text-right">SEND MESSAGE</button>
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
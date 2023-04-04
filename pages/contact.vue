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
        <div class="grid grid-cols-1 grid-rows-1 gap-4 mb-12">
            <div class="px-8 py-8 text-2xl break-normal leading-9">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </div>
        
        <div class="grid grid-cols-2 grid-rows-4 gap-4 mb-12">
            <div>
                <label for="name" class="block text-sm font-medium leading-6 text-gray-900">YOUR NAME</label>
                <div class="mt-2">
                    <input type="text" name="name" id="name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder=" you">
                </div>
            </div>
            <div class="row-span-3 text-center relative">
                <div class="text-2xl absolute inset-x-0 bottom-0">
                    <div class="text-lg m-4">
                        <div class="flex justify-center">
                            <a class="mb-4" href="https://github.com/rsh8040">github</a>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </div>
                        <div class="flex justify-center">
                            <a class="mb-4" href="https://rsh8040.github.io/my_portfolio/">Homepage</a>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </div>
                    </div>
                    limsuhyeon8040@gmail.com
                </div>
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
            <div class="flex justify-center">
                <div class="w-10 h-10">
                    <a href="https://github.com/rsh8040">
                        <img src="images/git-hub.png" alt="github" />
                    </a>
                </div>
            </div>
            <div>© 2023. Elly. All rights reserved.</div>
        </div>
    </footer>
</template>
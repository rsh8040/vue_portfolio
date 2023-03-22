<template>
    <div class="fixed w-full top-0">
        <div class="lg:container mx-auto">
            <nav class="text-right mr-1 mt-2">
                <a href="/">HOME</a>
                <a href="/project" class="ml-2">PROJECTS</a>
                <a href="/contact" class="ml-2">CONTACT</a>
            </nav>
        </div>
    </div>
    
    <div class="lg:container mx-auto px-4 py-2 bg-red-400">
        <div class="grid grid-cols-1 grid-rows-1 gap-4 mb-12">
            <div class="bg-green-400" style="height: 100px;">번호/제목/부제목</div>
        </div>
        
        <div class="grid grid-cols-2 grid-rows-2 gap-4 mb-12">
            <div class="bg-blue-400">프로젝트 기간</div>
            <div class="bg-blue-400 row-span-2">프로젝트 대표이미지</div>
            <div class="bg-blue-400" style="height: 90px;">기술스택</div>
        </div>
        
        <div class="bg-yellow-400 mb-12" style="height: 200px;">핵심내용</div>
        
        <div class="mb-12">
            <div class="mb-4 bg-gray-400" style="height: 400px;">서브이미지</div>
            <div class="mb-4 bg-gray-400" style="height: 400px;">서브이미지</div>
            <div class="mb-4 bg-gray-400" style="height: 400px;">서브이미지</div>
            <div class="mb-4 bg-gray-400" style="height: 400px;">서브이미지</div>
            <div class="mb-4 bg-gray-400" style="height: 400px;">서브이미지</div>
        </div>
        
        <div class="flex justify-between mb-12">
            <div class="bg-indigo-400" style="height: 60px; width:100px;">이전페이지</div>
            <div class="bg-indigo-400" style="height: 60px; width:100px;">다음페이지</div>
        </div>
    </div>

    <footer>
        <div class="lg:container mx-auto bg-gray-600" style="height: 150px;">
            <h1>푸터</h1>
        </div>
    </footer>
</template>
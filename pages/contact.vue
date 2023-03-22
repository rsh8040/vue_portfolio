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
            <div class="bg-green-400" style="height: 400px;">멘트</div>
        </div>
        
        <div class="grid grid-cols-2 grid-rows-4 gap-4">
            <div class="bg-blue-400">당신의 이름</div>
            <div class="bg-blue-400 row-span-4">내소개</div>
            <div class="bg-blue-400">당신의 이메일</div>
            <div class="bg-blue-400">당신의 메세지</div>
            <div class="bg-blue-400" style="height: 90px;">메세지 보내기</div>
        </div>
    </div>
</template>
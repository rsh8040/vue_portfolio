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
        <div class="grid grid-cols-2 grid-rows-2 gap-4 mb-12">
            <div class="row-span-2 bg-green-400">글씨움직이는모션</div>
            <div class="bg-green-400">빈공간</div>
            <div class="bg-green-400" style="height: 200px;">날씨정보</div>
        </div>

        <div class="grid grid-cols-2 grid-rows-3 gap-4 mb-12">
            <div class="bg-yellow-400">프로젝트1 이미지</div>
            <div class="bg-yellow-400">프로젝트1 제목</div>
            <div class="bg-yellow-400">프로젝트2 제목</div>
            <div class="bg-yellow-400">프로젝트2 이미지</div>
            <div class="bg-yellow-400">프로젝트3 이미지</div>
            <div class="bg-yellow-400" style="height: 200px;">프로젝트3 제목</div>
        </div>

        <div class="grid grid-cols-2 grid-rows-5 gap-4 mb-12">
            <div class="bg-blue-400 row-span-2">연락주세요!</div>
            <div class="bg-blue-400">빈공간</div>
            <div class="bg-blue-400">당신의 이름</div>
            <div class="bg-blue-400 row-span-3">나의이름 / 나의이메일</div>
            <div class="bg-blue-400">당신의 이메일</div>
            <div class="bg-blue-400">당신의 메세지</div>
            <div class="bg-blue-400" style="height: 50px;">메세지 보내기</div>
        </div>
    </div>
    
    <footer>
        <div class="lg:container mx-auto bg-gray-600" style="height: 150px;">
            <h1>푸터</h1>
        </div>
    </footer>
</template>
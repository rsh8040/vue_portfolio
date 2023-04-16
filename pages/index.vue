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
                    <input type="text" name="name" id="name" v-model="name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder=" you">
                </div>
            </div>
            <div class="row-span-3 text-center">
                <div class="text-xl">limsuhyeon8040@gmail.com</div>
            </div>
            <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">YOUR EMAIL</label>
                <div class="mt-2">
                    <input type="email" name="email" id="email" v-model="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder=" you@example.com">
                </div>
            </div>
            <div>
                <label for="message" class="block text-sm font-medium leading-6 text-gray-900">YOUR MESSAGE</label>
                <div class="mt-2">
                    <input type="text" name="message" id="message" v-model="message" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder=" text your message">
                </div>
            </div>
            <button  @click="send()" class="text-right">SEND MESSAGE</button>
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

    <TransitionRoot as="template" :show="sendMailModalOpen">
    <Dialog as="div" class="relative z-10" @close="sendMailModalOpen = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
              <div>
                <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <CheckIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">메일 전송완료!</DialogTitle>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">Elly에게 메일을 보내주셔서 감사합니다</p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6">
                <button type="button" class="inline-flex w-full justify-center rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600" @click="sendMailModalOpen = false">확인</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

  <TransitionRoot as="template" :show="sendMailModalFailOpen">
    <Dialog as="div" class="relative z-10" @close="sendMailModalOpen = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
              <div>
                <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                    <ExclamationTriangleIcon class="h-6 w-6 text-red-600" aria-hidden="true" />
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">메일 전송실패</DialogTitle>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">{{ errorMessage }}</p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6">
                <button type="button" class="inline-flex w-full justify-center rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600" @click="sendMailModalFailOpen = false">확인</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/24/outline'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'

const name = ref('')
const email = ref('')
const message = ref('')

const sendMailModalOpen = ref(false)
const sendMailModalFailOpen = ref(false)
const errorMessage = ref('')

async function send() {

    if(!name.value) {
        sendMailModalFailOpen.value = true
        errorMessage.value = '이름을 입력해주세요'
        return false
    }
    if(!email.value) {
        sendMailModalFailOpen.value = true
        errorMessage.value =  '이메일을 입력해주세요'
        return false
    }
    if(!message.value) {
        sendMailModalFailOpen.value = true
        errorMessage.value = '보낼메세지를 입력해주세요'
        return false
    }

    axios
    .post('https://prod-30.koreacentral.logic.azure.com:443/workflows/5dae9090695a4e5988d538d33478f417/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=oTDJi5_Z7WhB1nS-K2Vm4CLQYbO-Hmq9FJbDqqaXqmU', 
    {
        name: name.value,
        email: email.value,
        content: message.value
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error.response))
    
    sendMailModalOpen.value = true
}
</script>
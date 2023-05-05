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
                        <div class="text-center">{{sigungu}}</div>
                        <div class="text-center">대기질</div>
                        <div class="text-center text-3xl">{{temperature}}℃</div>
                        <div class="flex justify-center items-center">
                            <div v-if="fineDustGrade == '좋음'" class="w-4 h-4 bg-blue-700 border border-blue-700 rounded-full"></div>
                            <div v-if="fineDustGrade == '보통'" class="w-4 h-4 bg-green-700 border border-green-700 rounded-full"></div>
                            <div v-if="fineDustGrade == '나쁨'" class="w-4 h-4 bg-red-700 border border-red-700 rounded-full"></div>
                            <div v-if="fineDustGrade == '' || fineDustGrade == null">{{ fineDustErrorMessage }}</div>
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

const temperature = ref('')
const sigungu = ref('')
const findDustCity = ref('')

const fineDustErrorMessage = ref('')
const fineDustGrade = ref('')

onMounted(() => {
  myLocation()
})

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

    await useFetch('', {
      method: "POST",
      body: {
        'name': name.value,
        'email': email.value,
        'content': message.value
      }
    })
    sendMailModalOpen.value = true
    
}

const setGeolocation = () => {}
  
async function myLocation() {
  let lat, long;
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
        lat = position.coords.latitude,
        long = position.coords.longitude,
        setGeolocation((geolocation) => {
          return {
            geolocation,
            lat,
            long,
          }
        })
        xyConverter('toXY',lat,long)
        coordinateData(lat,long)
      },
      function (error) {
        console.error(error);
      })
    }
  }

    // LCC DFS 좌표변환을 위한 기초 자료
    //
    const RE = 6371.00877 // 지구 반경(km)
    const GRID = 5.0 // 격자 간격(km)
    const SLAT1 = 30.0 // 투영 위도1(degree)
    const SLAT2 = 60.0 // 투영 위도2(degree)
    const OLON = 126.0 // 기준점 경도(degree)
    const OLAT = 38.0 // 기준점 위도(degree)
    const XO = 43 // 기준점 X좌표(GRID)
    const YO = 136 // 기1준점 Y좌표(GRID)
    //
    // LCC DFS 좌표변환 ( code : "toXY"(위경도->좌표, v1:위도, v2:경도), "toLL"(좌표->위경도,v1:x, v2:y) )
    //

  function xyConverter(code, v1, v2) {
    const DEGRAD = Math.PI / 180.0
    const RADDEG = 180.0 / Math.PI

    const re = RE / GRID
    const slat1 = SLAT1 * DEGRAD
    const slat2 = SLAT2 * DEGRAD
    const olon = OLON * DEGRAD
    const olat = OLAT * DEGRAD

      var sn = Math.tan(Math.PI * 0.25 + slat2 * 0.5) / Math.tan(Math.PI * 0.25 + slat1 * 0.5)
      sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn)
      var sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5)
      sf = Math.pow(sf, sn) * Math.cos(slat1) / sn
      var ro = Math.tan(Math.PI * 0.25 + olat * 0.5)
      ro = re * sf / Math.pow(ro, sn)
      var rs = {}
      if (code == "toXY") {
          rs['lat'] = v1
          rs['lng'] = v2
          var ra = Math.tan(Math.PI * 0.25 + (v1) * DEGRAD * 0.5)
          ra = re * sf / Math.pow(ra, sn)
          var theta = v2 * DEGRAD - olon
          if (theta > Math.PI) theta -= 2.0 * Math.PI
          if (theta < -Math.PI) theta += 2.0 * Math.PI
          theta *= sn
          rs['x'] = Math.floor(ra * Math.sin(theta) + XO + 0.5)
          rs['y'] = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5)
      }
      else {
          rs['x'] = v1
          rs['y'] = v2
          var xn = v1 - XO
          var yn = ro - v2 + YO
          ra = Math.sqrt(xn * xn + yn * yn)
          if (sn < 0.0) - ra
          var alat = Math.pow((re * sf / ra), (1.0 / sn))
          alat = 2.0 * Math.atan(alat) - Math.PI * 0.5

          if (Math.abs(xn) <= 0.0) {
              theta = 0.0
          }
          else {
              if (Math.abs(yn) <= 0.0) {
                  theta = Math.PI * 0.5
                  if (xn < 0.0) - theta
              }
              else theta = Math.atan2(xn, yn)
          }
          var alon = theta / sn + olon
          rs['lat'] = alat * RADDEG
          rs['lng'] = alon * RADDEG
      }
      temperaturesData(rs.x,rs.y)
  }

  async function temperaturesData(x,y) {

    const now = new Date()
    const year = (now.getFullYear()).toString() // 년도
    const month = (now.getMonth() + 1).toString().padStart(2, '0')  // 월
    const date = (now.getDate()).toString().padStart(2, '0') // 일
    const hours = (now.getHours()-1).toString().padStart(2, '0') // 시간
    const minutes = now.getMinutes() // 분
    const yesterday = (new Date(now.setDate(now.getDate() -1)).toISOString().split('T')[0]).toString().padStart(2, '0') // 어제일자
    let halfHourOrOnTime

    if(parseInt(minutes/30) == 1) {
      halfHourOrOnTime = '30'
    }
    
    if(parseInt(minutes/30) == 0) {
      halfHourOrOnTime = '00'
    }

    const { data } = await useFetch('http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=TNAnRP7WiL4Eh5Cl3ky3/i550iw24fmyTTi9UzP6uTnhPAan/hRVD1pCwaIxAQ1PY7ZhvUpVJ8L0p8hXBkqt8w==&numOfRows=10&pageNo=1&base_date='+year+month+date+'&base_time='+hours+halfHourOrOnTime+'&nx='+x+'&ny='+y+'&dataType=JSON')
    const temperatureArray = data._rawValue.response.body.items.item
   
    temperatureArray.forEach(index => {
      if(index.category == 'T1H') {
        temperature.value = parseInt(index.obsrValue)
      }
    })

    fineDustData(yesterday)

  }

  async function coordinateData(lat, long) {

    const { data } = await useFetch('https://dapi.kakao.com/v2/local/geo/coord2address.json?x='+long+'&y='+lat+'&input_coord=WGS84', {
      headers: {
        'Authorization': 'KakaoAK ded0f248016c66efcf99109a241e74cc'
      }
    })

    const sig = data._rawValue.documents[0].address.region_2depth_name
    const ctp = data._rawValue.documents[0].address.region_1depth_name
    sigungu.value = sig
    findDustCity.value = ctp
  }

  async function fineDustData(yesterday) {

    const { data } = await useFetch('http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth?searchDate='+yesterday+'&returnType=JSON&serviceKey=TNAnRP7WiL4Eh5Cl3ky3/i550iw24fmyTTi9UzP6uTnhPAan/hRVD1pCwaIxAQ1PY7ZhvUpVJ8L0p8hXBkqt8w==&numOfRows=100&pageNo=1')
    const str = data._rawValue.response.body.items[0].informGrade
    let strDataArray = str.split(/[ ,:]/)
    let strTrimArray = strDataArray.filter((element) => {
      return element !== undefined && element !== null && element !== '';
    })

    let fineDustDataMap = new Map()
    let ctpName
    let grade
    
    strTrimArray.forEach((name, index) => {
      if(index % 2 == 0) {
        if(name == "경기남부") {
          name = "경기"
        }
        ctpName = name
      }
      if(index % 2 == 1) {
        grade = name
      }
      fineDustDataMap.set(ctpName, grade)
    })
    
    let city = findDustCity.value
    
    fineDustDataMap.forEach((value, key) => {
      if(key == "경기북부") {
        fineDustDataMap.delete("경기북부")
      }
      if(key != city || city == null || city == "") {
        fineDustErrorMessage.value = "측정불가"
      }
      if(key == city) {
        fineDustGrade.value = value
        return value
      }
    })

  }

</script>
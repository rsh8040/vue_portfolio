/**
 * 공공데이터포털 기온api
 */
export async function temperatureDateApi(x: number, y: number, year: string, month: string, date: string, hours: string ,halfHourOrOnTime: string) {
    const resp = await useFetch('http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=TNAnRP7WiL4Eh5Cl3ky3/i550iw24fmyTTi9UzP6uTnhPAan/hRVD1pCwaIxAQ1PY7ZhvUpVJ8L0p8hXBkqt8w==&numOfRows=10&pageNo=1&base_date='+year+month+date+'&base_time='+hours+halfHourOrOnTime+'&nx='+x+'&ny='+y+'&dataType=JSON')
    return resp
}

/**
 * 공공데이터포털 미세먼지api
 */
export async function fineDustDataApi(yesterday: string){
    const resp = await useFetch('http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth?searchDate='+yesterday+'&returnType=JSON&serviceKey=TNAnRP7WiL4Eh5Cl3ky3/i550iw24fmyTTi9UzP6uTnhPAan/hRVD1pCwaIxAQ1PY7ZhvUpVJ8L0p8hXBkqt8w==&numOfRows=100&pageNo=1')
    return resp
}

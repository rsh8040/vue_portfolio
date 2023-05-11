/**
 * 카카오 좌표api
 */
export async function kakaoCoordinateDataApi(lat: number, long: number){
    const resp = await useFetch('https://dapi.kakao.com/v2/local/geo/coord2address.json?x='+long+'&y='+lat+'&input_coord=WGS84', {
        headers: {
            'Authorization': 'KakaoAK ded0f248016c66efcf99109a241e74cc'
        }
    })

    return resp
}

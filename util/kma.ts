const RE = 6371.00877
const GRID = 5.0
const SLAT1 = 30.0
const SLAT2 = 60.0
const OLON = 126.0
const OLAT = 38.0
const XO = 43
const YO = 136
const DEGRAD = Math.PI / 180.0

/**
 * 브라우저 좌표-> 기상청 좌표
 */
export function toKmaCoord(v1: number, v2: number) {
    var re = RE / GRID
    var slat1 = SLAT1 * DEGRAD
    var slat2 = SLAT2 * DEGRAD
    var olon = OLON * DEGRAD
    var olat = OLAT * DEGRAD

    var sn = Math.tan(Math.PI * 0.25 + slat2 * 0.5) / Math.tan(Math.PI * 0.25 + slat1 * 0.5)
    sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn)
    var sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5)
    sf = Math.pow(sf, sn) * Math.cos(slat1) / sn
    var ro = Math.tan(Math.PI * 0.25 + olat * 0.5)
    ro = re * sf / Math.pow(ro, sn)
    var rs = {} as any

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

    return {
        x: rs.x,
        y: rs.y
    } as KmaProjection
}

interface KmaProjection {
    x: number;
    y: number;
}
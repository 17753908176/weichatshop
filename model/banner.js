//业务对象
//举例  theme banner user address

import {
    Http
} from '../utils/http'
class Banner {
    static locationB = 'b-1'
    static async getHomeLocationB() {
        const res = await Http.request({
            url: `getBanner`,
            data: {
                name: this.locationB
            }
        })

        return res.data
    }
}
export {
    Banner
}
//业务对象
//举例  theme banner user address

import {Http} from '../utils/http'
 class Theme {

    static async getHomeLocationA(){   
    const res =   await  Http.request({
            url:`getTheme`,
        })
        return res.data
    }
}
export {
    Theme
}

 
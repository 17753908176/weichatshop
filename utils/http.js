import {config} from '../config/config'
import {promisic} from '../utils/util'
class Http {
    static async request({url,data,params,success,method='GET'}){
      return await promisic(wx.request)(
            {
                url:`${config.apiBaseUrl}${url}`,
                data,
                params,
                method,
                header:{    
                },
                success(res){
                  success(res.data)
                }
              }
        )
    }
}
export {
    Http
}
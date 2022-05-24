import {
    Theme
} from '../../model/theme.js'
import {
    Banner
} from '../../model/banner.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    themmA:null,
    bannerB:null,
  },

  /**
   * 生命周期函数--监听页面加载
   * js 类型的约束
   * 业务逻辑
   * 数据绑定
   * view视图层 业务逻辑层 桥梁 中间层
   * MVC C  Controller 写业务 ，Model 写业务
   * Model Logic Service
   * Service Manager
   */
  onLoad: async function (options) {
this.initData()
  },

  async initData(){
    const themmA =  await Theme.getHomeLocationA()
    const bannerB =  await Banner.getHomeLocationB()
   
    this.setData({
        themmA:themmA.data[0],
        bannerB:bannerB.data,
    })    
  },
 

})

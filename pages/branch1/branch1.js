// pages/branch1/branch1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message : "你好"
  },
  handleBtnClick(){
    console.log("按钮被点击")
    this.setData({
      message: "再见"
    })
  },
  handleGetUserInfo(event){
    console.log(event)
  },

  //1.监听页面的生命周期函数
  onLoad(){//页面被加载时
    console.log("onLoad")
  },
  onReady(){//页面显示出来时
    console.log("onReady")
  },
  onShow(){//页面初次渲染完成时
    console.log("onShow")
  },
  onHide(){//将小程序放置到后台时
    console.log("onHide")
  },
  onUnload(){//当跳转页面被关掉时
    console.log("onUnload")
  },

  //监听wxml中的一些相关事件
  handleViewClick(){
    console.log('handleViewClick被点击了')
  },
  //其他事件
  //监听页面的滚动
  onPageScroll(obj){
    console.log(obj)
  },
  //监听页面滚动到顶部
  // onReachBottom(){
  //   console.log('页面滚动到底部')
  // }
  //监听页面是否下拉刷新
  onPullDownRefresh(){
    console.log('下拉刷新响应')
  }
})
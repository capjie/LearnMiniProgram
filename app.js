//json中不能有注释，必须保持固有的形式
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  //声明周期函数，后天存活两个小时
  onLaunch: function () {
    console.log("onLanch已经响应");
    //异步调用
    // wx.getUserInfo({
      //拿到数据之后再进行回调
    //   success: function(res){
    //     console.log(res)
    //   }
    // })
    //人为抛出错误吃setTimeout
    // setTimeout(()=>{
    //   const err = new Error();
    //   throw err;
    // },3000);
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log("onShow响应");
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    //console.log("HIDe")
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    //console.log("onError响应")
  }
})

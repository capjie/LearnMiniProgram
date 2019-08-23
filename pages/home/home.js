Page({
  data:{
    name: 'Capjie',//这些的数据可以来自服务器
    age : 18,
    students: [
      { id: 110, name: 'capjie', age: 15 },
      { id: 111, name: 'cap2', age: 16 },
      { id: 112, name: 'cap3', age: 17 },
      { id: 113, name: 'cap4', age: 18 },
      { id: 114, name: 'cap6', age: 19 }
    ],
    counter:0
  },
  handleBtnClick(){
    console.log("加号按钮被点击了");
    //this.setData()可以改变目标的值，并且能够在页面上显示
    this.setData({
      counter:this.data.counter + 1
    })
  },
  handleSubtraction(){
    console.log("减号按钮被点击了");
    this.setData({
      counter : this.data.counter - 1
    })
  }
})
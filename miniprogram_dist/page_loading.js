// conmon/page_loading.js
Component({
 
  /**
   * 组件的属性列表
   */
  properties: {
    show:{
      type: Boolean, 
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    bodyshow:false
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }, 
  attached: function () { 
   
   
  },
  stopLoading:function(){
    this.setData({
       show:true
    });
  }
})

/**
 * Created by mazhenxiao on 2017/2/10.
 */
"use strict"
~function(window,$,_,undefined){
  var iss = {
      alert:alert
  }
  /*
  * alert
  * iss.alert({
  *    title:"标题",
  *    content:'内容',
  *    ok:function(){},//确认按钮调用
  *    okVal:'确认',
  *    cancel:function(){}, //取消按钮调用
  *    cancelVal:'取消',
  *    button:[{value:'确定',callback:function(){}}] //自定义button
  *    close:function(){} //关闭按钮
  * })
  * */
 function alert(opt){
    var arg = {
        title:"标题",
        content:"内容",
        ok:$.noop,
        okVal:"确定",
        cancel:$.noop,
        cancelVal:"取消",
        button:[],
        close:$.noop
    }
     $.extend(arg,opt);
     var tem = '<div class="modal fade" tabindex="-1" role="dialog" id="<%=id%>">\
         <div class="modal-dialog" role="document">\
         <div class="modal-content">\
         <div class="modal-header">\
         <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
     <h4 class="modal-title"><%=title%></h4>\
     </div>\
     <div class="modal-body">\
         <div><%=content%></div>\
     </div>\
     <div class="modal-footer"><%=button%>\
     </div>\
     </div>\
     </div>\
     </div>'
       



 }
}(window,jQuery,_,undefined)
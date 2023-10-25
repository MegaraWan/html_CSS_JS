function $id(id){
  return document.getElementById(id);
}  

function checkForm(){
  //檢查帳號長度不得低於6碼


  //檢查密碼長度不得低於6碼(密碼英數字都要有才行)


  //檢查性別一定要選



  //檢查消息來源一定要選


  //正確就送出


}

window.addEventListener( "load" , function (){
  document.getElementById("btnSend").onclick = checkForm;
});
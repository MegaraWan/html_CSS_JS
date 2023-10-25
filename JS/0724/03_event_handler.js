function showAns(){
    var a=10; 
    var b=20; 
    window.alert(a+b);
}

function noAns(){
    window.alert("不告訢你!!!");
}

function showSmile(){
    window.alert("^___________________^");
    btns[2].removeEventListener("click", showSmile, false);
    //p.142 用這個功能可以執行一次之後，之後再點按就不會出現
}


var btns;
function init(){
    document.getElementById("curPos").innerHTML = "Welcome to Tibame....."
    btns = document.getElementByNAME("btn")
    btns[1].onclick = showAns;
    btns[1].onclick = noAns;
    //此行會覆寫上面的設定 
    //類似: doncument.title="A"
    //      doncument.title="B"  title會變成B，蓋掉了A

    // 以JavaScript程式碼使用事件屬性來設定事件處理器
    // 物件.on事件名稱=事件處理器 (註)

    btn[2].addEventListener("click", showAns, false);
    btns[2].addEventListener("click", showSmile, false); 
    //用這個方式第二行不會蓋掉第一行，會都執行 
    // 以JavaScript程式碼使用addEventListener來設定事件處理器
    // 物件. addEventListener (事件名稱,事件處理器, useCapture)

}

window.onload = init;
// 系統事件 我底下全部都下載完，再來跑JS
// 才不會我在header做JS結果找不到資料


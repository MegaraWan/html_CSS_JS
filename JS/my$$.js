function $(id){
    let obj = document.getElementById(id);

    obj.text = function (text){
        obj.innerText = text;
        return obj;
    }

    obj.html = function (html){
        obj.innerHTML = html;
        return obj;
    }

    obj.css = function(css, value){
        obj.style[css] = value; //obj.style["color"] = value
        return obj;
    }

    return obj;
}
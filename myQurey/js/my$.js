(function(){
    function myqurey(selector){
        // 构造函数
        function Myqurey(selector){
            this.selector=selector;
            let dom=document.querySelectorAll(this.selector);
            this.length = dom.length;
            for(let i=0;i<dom.length;i++){
                this[i]=dom[i];
            }
            this.css=function(){
                if( typeof arguments[0] =="object"){
                    for(let i =0;i<this.length;i++){
                        for(let key in arguments[0]){
                            this[i].style[key]=arguments[0][key];
                        }
                    }
                }else{
                    if(arguments.length==1){
                        return getStyle(dom[0])[arguments[0]];
                    }else{
                        for(let i=0;i<this.length;i++){
                            dom[i].style[arguments[0]]=arguments[1];
                        }
                    }
                }
                return this;
            }
            function getStyle(obj){
                return (typeof obj.currentStyle==undefined)?obj.currentStyle:document.defaultView.getComputedStyle(obj);
            }
            this.text=function(){
                if(arguments.length==0){
                    return dom[0].innerText;
                }else{
                    for(let i=0;i<dom.length;i++){
                        dom[i].innerText = arguments[0];
                    }
                }
                return this;
            }
            this.html=function(){
                if(arguments.length==0){
                    return dom[0].innerHTML;
                }else{
                    for(let i=0;i<dom.length;i++){
                        dom[i].innerHTML = arguments[0];
                    }
                }
                return this;
            }
            this.next=function(){
                for(let i=0;i<this.length;i++){
                    delete this[i];
                }
                this[0]=dom[0].nextElementSibling;
                return this;
            }
            this.prev=function(){
                for(let i=0;i<this.length;i++){
                    delete this[i];
                }
                this[0]=dom[0].previousElementSibling;
                return this;
            }
            this.addClass=function(newClass){
                for(let i=0;i<this.length;i++){
                    dom[i].className = dom[i].className +" "+newClass;
                }
                return this;
            }
            this.removeClass=function(targetClass){
                for(let i=0;i<this.length;i++){
                    dom[i].className = dom[i].className.replace(targetClass,"");
                }
                return this;
            }
            this.show=function(){
                for(let i=0;i<this.length;i++){
                    dom[i].style.display="block";
                }
                return this;
            }
            this.hide=function(){
                for(let i=0;i<this.length;i++){
                    dom[i].style.display="none";
                }
                return this;
            }
        }
        // 添加实例对象的扩展功能
        Myqurey.prototype.extend=function(obj){
            for(let key in obj){
                Myqurey.prototype[key]=obj[key];
            }
        }
        // 创建实例对象
        let myqurey=new Myqurey(selector);
        myqurey.fn=Myqurey.prototype;
        //返回实例对象
        return myqurey;
    }
    // 添加$的扩展功能
    myqurey.extend=function(obj){
        for(let key in obj){
            $[key]=obj[key];
        }
    }
    myqurey.ajax=function(obj){
        let ajax = new AJAX(obj);
        ajax.init();
    }
    myqurey.get=function(obj){
        obj.type="get";
        let ajax = new AJAX(obj);
        ajax.init();
    }
    myqurey.post=function(obj){
        obj.type="post";
        let ajax = new AJAX(obj);
        ajax.init();
    }
    function AJAX(obj){
        this.url=obj.url||"";
        this.type=obj.type||"get";
        this.para=obj.para||null;
        this.success=obj.success;
        this.error=obj.error;
        this.init=function(){
            let XHR;
            if(window.XMLHttpRequest){
                XHR = new XMLHttpRequest;
            }else{
                XHR = new ActiveXObject("Microsoft.XMLHTTP");
            }
            if(this.type=="get"){
                XHR.open(this.type,this.url+"?"+this.para,true);
            }else{
                XHR.open(this.type,this.url,true);
            }
            XHR.onreadstatechange = function(){
                if(httpRequest.readyState==4&httpRequest.status==200){
                    console.log("200");
                    this.success(XHR.reponseText);
                    console.log(this.success());
                }else if(httpRequest.readyState==4&httpRequest.status!=200){
                    this.error(XHR.reponseText);
                    console.log("error");
                }
            }
            if(this.type=="post"){
                console.log("www111");
                XHR.setRequestHeader("content-type","application/x-www-form-urlencoded");
                XHR.send(this.para);
            }else{
                XHR.send();
            }
        }
    }
    window.$ = window.myqurey = myqurey;
})();
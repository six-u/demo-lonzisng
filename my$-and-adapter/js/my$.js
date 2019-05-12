(function(){
    function $(selector){
        // 构造函数
        function My$(selector){
            this.selector=selector;
            getElement(this.selector);
            function getElement(selector){
                let type=this.selector.charAt(0),len;
                if(type=="#"){
                    let id = this.selector.slice(1);
                    len=1;
                    this[0]=document.getElementById(id);
                }else if(type=="."){
                    let className = this.selector.slice(1);
                    len = document.getElementsByClassName(className).length;
                    for(let i=0;i<len;i++){
                        this[i]=document.getElementsByClassName(className)[i];
                    }
                }else{
                    if(!document.getElementsByTagName(this.selector)){
                        len = document.getElementsByTagName(this.selector);
                        for(let i=0;i<len;i++){
                            this[i]=document.getElementsByTagName(this.selector)[i];
                        }
                    }else{
                        len = document.getElementsByName(this.selector);
                        for(let i=0;i<len;i++){
                            this[i]=document.getElementsByName(this.selector)[i];
                        }
                    }
                }
            }
            this.length = len;
            this.constructor="My$";
            this.extend=function(obj){
                for(let key in obj){
                    this[key]=obj[key];
                }
            }
            // this.css=function(attr,value){

            // }
        }
        // 添加原型
        My$.prototype.extend=function(obj){
            for(let key in obj){
                $[key]=obj[key];
            }
        }
        // 创建实例对象
        let my$=new My$(selector);
        my$.fn=My$.prototype;
        //返回实例对象
        return my$;
    }
    $.ajax=function(obj){
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
        let ajax = new AJAX(obj);
        ajax.init();
    }
    window.$ = $;
})();
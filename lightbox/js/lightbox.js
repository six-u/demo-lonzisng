(function(){
    function LightBox() {
        /**
        *  obj{
        *      selector:string,  //选择器
        *      srcArr:array,  //图片地址数组
        *      textArr:array,  //图片说明数组
        *      rewrite:boolean  //是否覆盖元素原有的内容，true:是,false:否
        *      }
        */
        // 初始化
        this.init=function (obj){
            this.__selector=obj.selector;
            this.__rewrite=obj.rewrite;
            this.__srcArr=[];
            this.__textArr=[];
            this.__createLightBox(this.__selector);
            if(obj.srcArr!==undefined&&obj.textArr!==undefined){
                this.__srcArr=obj.srcArr;
                this.__textArr=obj.textArr;
                this.__createFigureList(this.__selector,this.__srcArr,this.__textArr,this.__rewrite);
                this.__lightBox(this.__selector);
            }else{
                this.__lightBox(this.__selector);
            }
        }
        this.extend = function(obj){
            for(let key in obj){
                this[key]=obj[key];
            }
        }
        //创建遮罩层
        this.__createLightBox=function (selector){
        $(selector).after(`<div id="windowbox"><div class="big-img"><img src="" alt="" /></div><p class="text"></p><div id="closeLight" class="close">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABHElEQVRYR+2W7W3CQAyGH09QRmEEOgGwAZ2gMAErsAHZAJgARugo7QRGlu4QCsmdkwYdSMnP6Gw/fu/8IRT+pHB8RoBRgddXQFWnwBY4iUjlqRpVXQDfwEZEflI2SQVC8DMwCU6+chCqugL24fwv8JmCyAEcgXktg1aIWvBoZsqZIo1fDsAMDw2WDxAtwc10KSKWSHcAs0g4vkF4zvQGyEEEx/HO7+Nk34sddpdhIsum5FzBOwFklOiceTRwKxANMkq4M39PAOc76KSC+wqcwaOybggXQKrOn16GnibjOdOrEYWpVq4Vq2rxYWS7wAX46DmO/4BZ73Ecup9B7IAqtwvUmpXtBet/LSRtD2fI/64yHDJg3dcIMCpQXIErVXOQIfJG8JYAAAAASUVORK5CYII=" alt=""></div>
        <p><img id="prevLight" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAABv0lEQVRoQ93b0VHDMAwG4P+fAEboCDABdAOYALoBTABMQpkARugIsAEjwATidFfueGkTO7b0G73mFPuLLnmQYmKAMLMHALcATgG8Abgn+VWzddYkReaY2fMe+3fZHcl1zT6kwQewv85zku+laFnwBNada5K7fwGegf0GsKp5j+UqPAPrRb0m6R+v4pACz8RuSG6LpfsEGXAE1s0S4CisBDgSmw6OxqaCM7Bp4CxsCjgTGw7OxoaCFbBhYBVsCFgJ2x2shu0KVsR2A6tiu4CVsc3B6tim4BGwzcCjYJuAR8IuBo+GXQQeEVsNNrMrAK8TncNF3cXaruRUXlUTz8y8TXpz5OaS2CUVfgTgE71DsSW5mXraGddrK7wC4IOsk9HQVWBHmpnPa32UeSzkKl0NHhW9CDwiejF4NHQT8EjoZuBR0E3BI6Cbg9XRXcDK6G5gVXRXsCK6O1gNHQJWQoeBVdChYAV0ODgbnQLORKeBs9Cp4Ax0OjgaLQGORMuAo9BS4Ai0HLgAXfVXvCR4JvqFpPfGi0IWPAP9RNJHPkUhDT6C9lMtZyQ/i7QqRwCmNm1mlwC8mhcAPgDc1ZxZ8nV+ACHLMEzuYm8uAAAAAElFTkSuQmCC" alt="">
        <img id="nextLight" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAABzklEQVRoQ+3b7U3EMAwG4NcTwAbABmzAscGxAZsxAmwATAAbcLcBTGBkqSed0H20dmK/kcjfNmmeJqncfAiCSVXvrAgReQ8WlZJdvE9R1UsArwBupzI2AB5E5NNbZka+CPhjD7ur6zeAe2a0C6yq1qoGPpSo0V7waurOx3ohLdoLtvFrY/bixLijRLvAhlTVNYDnMx8aOrQbPKEfATyNhA6BR0SHwaOhm4BHQjcDj4JuCh4B3RzMju4CZkZ3A7Oiu4IZ0d3BbOgUMBM6DcyCTgUzoNPB1egScCW6DFyFLgVXoMvB2WgKcCaaBpyFpgIvQG9E5ObM5OHBy3TgBWhb0nlbiv4HL31jre9X1Tlz3VsRufY8m6qFZ2J/AKy8K5Q04Ays9QgKcBaWApyJLQdnY0vBFdgycBW2BFyJTQdXY1PBDNg0sKqe2/VjdQlFUHPDzO6Bx7Sny3bs2c6fYykF272F2bBdwYzYbmBWbBcwM7Y5mB3bFDwCthl4FGwT8EjYMHg0bAg8IjYK/gJwaqo0LVycG0e7wTN+BiixvcC0WDfYMqqqnXm4+tOdqLFRsB3ledlDbwGsvSsCS8Zh5N7w//A0nu0o3uKVvEjFvXl/AZCzYEzoWuCFAAAAAElFTkSuQmCC" alt="">
        </p></div>`);
        }
        //创建内容列表
        this.__createFigureList=function (selector,srcArr,textArr,rewrite){
            if(rewrite===true){$(selector).html("");}
            for(let i=0;i<srcArr.length;i++){
                $(selector).append(`<figure>
                    <img src="${srcArr[i]}" alt=""/>
                    <figcaption>${textArr[i]}</figcaption>
                </figure>`);
            }
        }
        //添加事件
        this.__lightBox = function (selector){
            let current=-1,srcArr=[],textArr=[];
            for(let i=0;i<$(selector).find("figure").length;i++){
                let src = $(selector).find("figure:eq("+i+")").find("img").attr("src");
                let text = $(selector).find("figcaption:eq("+i+")").text();
                srcArr.push(src);
                textArr.push(text);
            }
            $(selector).on("click","figure",function(){
                let currentSrc = $(this).find("img").attr("src");
                for(let i=0;i<srcArr.length;i++){
                    if(srcArr[i]==currentSrc){ current = i; }
                }
                $("#windowbox").show();
                showLIght(current);
            })
            $("#closeLight").click(function(){
                $("#windowbox").hide();
            })
            $("#nextLight").click(function(){
                current==srcArr.length-1?current=0:current++;
                showLIght(current); //1后移
            })
            $("#prevLight").click(function(){
                current==0?current=srcArr.length-1:current--;
                showLIght(current); //0前移
            })
            function showLIght(i){
                $(".big-img").find("img").attr("src",srcArr[i]);
                $("#windowbox").find(".text").text(textArr[i]);
            }
        }
    }
    LightBox.prototype.extend=function(obj){
        for(let key in obj){
            this[key]=obj[key];
        }
    }
    window.lightbox = new LightBox();
    window.lightbox.fn=LightBox.prototype;
})();
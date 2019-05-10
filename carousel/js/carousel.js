(function(){
    function Carousel(){
        this.init = function(obj){
            this.selector=obj.selector;
            this.point=obj.point;
            this.autoPlay=obj.autoPlay;
            this.time = obj.time;
            this.btn=this.btn;
            this.__createControll(this.selector,this.point,this.autoPlay,this.btn);
            this.__addEvent(this.selector,this.autoPlay,this.time);
        }
        this.__createControll=function (selector,pointposition,autoPlay,btn){
            let positon="at";
            if(pointposition!==undefined){
                positon+=pointposition;
            }else{
                positon+="bottom";
            }
            let span=[];
            for(let i=0;i<$(selector).find("figure").length;i++){
                if(i==0){
                    span.push(`<span class="current" data-id="${i}"></span>`);
                }else{
                    span.push(`<span data-id="${i}"></span>`);
                }
            }
            let div="";
            // if(btn){
            //     if(!autoPlay){

            //     }
            // }
            if(!autoPlay){
                div="blacker";
            }
            $(selector).append(`<div id="controll" class="controll">
                <div class="${div}"><img id="prev" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAABv0lEQVRoQ93b0VHDMAwG4P+fAEboCDABdAOYALoBTABMQpkARugIsAEjwATidFfueGkTO7b0G73mFPuLLnmQYmKAMLMHALcATgG8Abgn+VWzddYkReaY2fMe+3fZHcl1zT6kwQewv85zku+laFnwBNada5K7fwGegf0GsKp5j+UqPAPrRb0m6R+v4pACz8RuSG6LpfsEGXAE1s0S4CisBDgSmw6OxqaCM7Bp4CxsCjgTGw7OxoaCFbBhYBVsCFgJ2x2shu0KVsR2A6tiu4CVsc3B6tim4BGwzcCjYJuAR8IuBo+GXQQeEVsNNrMrAK8TncNF3cXaruRUXlUTz8y8TXpz5OaS2CUVfgTgE71DsSW5mXraGddrK7wC4IOsk9HQVWBHmpnPa32UeSzkKl0NHhW9CDwiejF4NHQT8EjoZuBR0E3BI6Cbg9XRXcDK6G5gVXRXsCK6O1gNHQJWQoeBVdChYAV0ODgbnQLORKeBs9Cp4Ax0OjgaLQGORMuAo9BS4Ai0HLgAXfVXvCR4JvqFpPfGi0IWPAP9RNJHPkUhDT6C9lMtZyQ/i7QqRwCmNm1mlwC8mhcAPgDc1ZxZ8nV+ACHLMEzuYm8uAAAAAElFTkSuQmCC" alt="">
                <img id="next" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAABzklEQVRoQ+3b7U3EMAwG4NcTwAbABmzAscGxAZsxAmwATAAbcLcBTGBkqSed0H20dmK/kcjfNmmeJqncfAiCSVXvrAgReQ8WlZJdvE9R1UsArwBupzI2AB5E5NNbZka+CPhjD7ur6zeAe2a0C6yq1qoGPpSo0V7waurOx3ohLdoLtvFrY/bixLijRLvAhlTVNYDnMx8aOrQbPKEfATyNhA6BR0SHwaOhm4BHQjcDj4JuCh4B3RzMju4CZkZ3A7Oiu4IZ0d3BbOgUMBM6DcyCTgUzoNPB1egScCW6DFyFLgVXoMvB2WgKcCaaBpyFpgIvQG9E5ObM5OHBy3TgBWhb0nlbiv4HL31jre9X1Tlz3VsRufY8m6qFZ2J/AKy8K5Q04Ays9QgKcBaWApyJLQdnY0vBFdgycBW2BFyJTQdXY1PBDNg0sKqe2/VjdQlFUHPDzO6Bx7Sny3bs2c6fYykF272F2bBdwYzYbmBWbBcwM7Y5mB3bFDwCthl4FGwT8EjYMHg0bAg8IjYK/gJwaqo0LVycG0e7wTN+BiixvcC0WDfYMqqqnXm4+tOdqLFRsB3ledlDbwGsvSsCS8Zh5N7w//A0nu0o3uKVvEjFvXl/AZCzYEzoWuCFAAAAAElFTkSuQmCC" alt="">
                </div>
                <p id="point" class="${positon}">${span.join("")}</p>
                </div>`)
        }
        this.__addEvent=function (selector,autoPlay,time){
            let len=$(selector).find("figure").length;
            $("#prev").click(function(){
                let index=parseInt($("#point").find(".current").attr("data-id"));
                index = index<=0?len-1:index-1;
                $(selector).find("figure").removeClass("current").eq(index).addClass("current");
                $("#point").find("span").removeClass("current").eq(index).addClass("current");
            });
            $("#next").click(__next);
            function __next(){
                let index=parseInt($("#point").find(".current").attr("data-id"));
                index = index>=len-1?0:index+1;
                $(selector).find("figure").removeClass("current").eq(index).addClass("current");
                $("#point").find("span").removeClass("current").eq(index).addClass("current");
            }
            if(autoPlay===true){
                this.timer= setInterval(function(){
                    __next();
                },parseInt(time));
            }
        }
    };
    window.carousel=new Carousel();
})();
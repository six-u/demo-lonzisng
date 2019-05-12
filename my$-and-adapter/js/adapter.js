
(function(){
    function adapter(data,attrArr){
        let target={};
        let i=0;
        if(i<attrArr.length){
            for(let key in data){
                target[attrArr[i]]=data[key];
                i++;
            }
        }
        return target;
    }
})();




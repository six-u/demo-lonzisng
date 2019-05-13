

(function(){
    function adapter(data,relationship){
        let arr=[];
        for(let i=0;i<data.length;i++){
            let target={};
            for(let key in data[i]){
                target[relationship[key]]=data[i][key];
            }
            arr.push(target);
        }
        return arr;
    }
    window.adapter=adapter;
// user=[
//     {username:"张三",usersex:"男",userage:"35"},
//     {username:"李四",usersex:"男",userage:"29"},
//     {username:"王二",usersex:"女",userage:"23"},
//     {username:"赵大",usersex:"男",userage:"40"}
// ]

// let player=adapter(user,{
//     username:"name",
//     usersex:"sex",
//     userage:"age"
// })
// console.log(player);

})();
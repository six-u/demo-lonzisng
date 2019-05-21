new Vue({
    el:"#app",
    data:{
        userData:[
            {name:"大侠留步",level:"px",num:"802340"},
            {name:"公良嘉",level:"xt",num:"202340"},
            {name:"夏天虹",level:"px",num:"780960"}
        ],
        userList:[],
        editName:"",
        editLevel:"",
        editNum:"",
        keyWords:"",
        isShow:false,
        isAdd:true,
        currentIndex:-1,
        keyHolder:"输入关键词"
    },
    created:function(){
        this.userList=this.userData;
    },
    methods:{
        editUser:function(index){
            this.isShow=true;
            this.isAdd=false;
            this.currentIndex=index;
            this.editName=this.userList[index].name;
            this.editLevel=this.userList[index].level;
            this.editNum=this.userList[index].num;
        },
        delUser:function(index){
            this.userList.splice(index,1);
        },
        addUser:function(){
            this.isShow=true;
            this.isAdd=true;
        },
        search:function(){
            let keyW=this.keyWords.trim()
            if(keyW==""){
                this.keyWords="";
                return;
            }
            let arr=keyW.split(" ");
            this.userList=[];
            this.userData.forEach(item => {
                for(prop in item){
                    if(item[prop].includes(arr[0])){
                        this.userList.push(item)
                    };
                }
            });
            
        },
        submit:function(){
            let obj={name:this.editName,level:this.editLevel,num:this.editNum};
            if(this.isAdd){
                this.userList.push(obj);
            }else{
                this.userList[this.currentIndex]=obj;
            }
            this.editName="";
            this.editLevel="";
            this.editNum="";
            this.currentIndex=-1;
            this.isShow=false;
        }
    }
})
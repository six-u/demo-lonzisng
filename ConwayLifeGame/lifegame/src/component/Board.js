import React from "react"
import Grid from "./Grid"

class Board extends React.Component{
    constructor(props){
        super();
        this.state={
            arr:[],
            brr:[]
        }
        this.update=()=>{
            console.log("in");
            let brr = this.state.brr;
            let arr = [];
            for(let i=0;i<60;i++){
                arr[i]=[];
                for(let j=0;j<100;j++){
                    let count=0;
                    if(i>0){
                        count = brr[i-1][j]==="1" ? count+1 : count;
                        if(j>0){
                            count = brr[i-1][j-1]==="1" ? count+1 : count;
                        }
                        if(j<99){
                            count = brr[i-1][j+1]==="1" ? count+1 : count;
                        }
                    }
                    if(j>0){
                        count = brr[i][j-1]==="1" ? count+1 : count;
                        if(i<59){
                            count = brr[i+1][j-1]==="1" ? count+1 : count;
                        }
                    }
                    if(j<99){
                        count = brr[i][j+1]==="1" ? count+1 : count;
                    }
                    if(i<59){
                        count = brr[i+1][j]==="1" ? count+1 : count;
                    }
                    if(i<59&&j<99){
                        count = brr[i+1][j+1]==="1" ? count+1 : count;
                    }
                    if(brr[i][j]==="1"){
                        if(count<2||count>3){
                            arr[i][j]="0";
                        }else{
                            arr[i][j]="1";
                        }
                    }else{
                        if(count === 3){
                            arr[i][j]="1";
                        }else{
                            arr[i][j]="0";
                        }
                    }
                }
            }
            brr =arr;
            arr =arr.toString().split(",");
            this.setState({
                arr:arr,
                brr:brr
            })
        }
        setInterval(this.update,60)
    }
    componentWillMount(){
        let arr=new Array()
        for(let i=0;i<60;i++){
            arr[i]=[]
            for(let j=0;j<100;j++){
                arr[i][j] = (Math.random()*60) > 56 ? "1" : "0";
            }
        }
        this.setState({
            brr:arr
        })
        arr=arr.toString().split(",");
        this.setState({
            arr:arr
        })
    }
    
    render(){
        return(
            <div className="board">
            {
                this.state.arr.map((item,index)=> {
                    return <Grid key={index} data={item}></Grid>
                })
            }
            </div>
        )
    }
}
export {Board as default}



import React from "react"

class Grid extends React.Component{
    render(){
        return(
            <span className={(this.props.data==="1"?"live" : "die") +" grid"}></span>
        )
    }
}
export {Grid as default}
import { Component } from "react";


class Banking extends Component{
    state = {
        count: 2000
    }
    hundred = () =>{         
            this.setState(prevState =>{
                const {count} =this.state
                 if(prevState.count <=500 || prevState.count <100)
                 {
                    alert('Sorry your account balance is too low (< 500 /-)')
                     return{count: prevState.count}
                 }
                return{count: prevState.count -100}
            })
        }
    twohundred = () =>{         
            this.setState(prevState =>{
                if(prevState.count <=500 || prevState.count <200){
                    alert('Sorry your account balance is too low (< 500 /-)')
                     return{count: prevState.count}
                }
                return{count: prevState.count -200}
            })
        }
    fivehundred = () =>{         
            this.setState(prevState =>{
                if(prevState.count <=500 || prevState.count <500){
                    alert('Sorry your account balance is too low (< 500 /-)')
                     return{count: prevState.count}
                }
                return{count: prevState.count -500}
            })
        }
    twothousand = () =>{         
            this.setState(prevState =>{
                if(prevState.count <=500 || prevState.count <2000){
                    alert('Sorry your account balance is too low (< 500 /-)')
                     return{count: prevState.count}
                }
                return{count: prevState.count -2000}
            })
        }
   
    render() {
        const {count}=this.state
         
        return(
            <>
            <section className="balanceStyle">
            <p> Your account balance is :&nbsp; <span>{count}</span> /-</p>
            <h4>Withdraw</h4>
            <h6>CHOOSE BELOW DENOMINATIONS</h6>    
            </section>
            <section className="btnStyling">
            <button onClick={this.hundred}>100</button>
            <button onClick={this.twohundred}>200</button>
            <button onClick={this.fivehundred}>500</button>
            <button onClick={this.twothousand}>2000</button>
            </section>
            
            </>
        )
    }
}
export default Banking
import {Component} from 'react'  
import Banking from './components/cashwithdrawal'

class App extends Component{
  
  
  render() {
    return(
      <>
         <div className='withdrawlForm col-12 col-sm-6 m-auto mt-5 p-3'>
           <h1>Narik Bank</h1>
           <section className='bankDetails'>
             
           <h3><span>V</span>Vogeti Satya Kiran</h3>
             <p>A/C: 000-000-XXXX-XXXX-XXXX</p>
           </section>
           <Banking/>
         </div>  
      </>
    )
  }
}
export default App
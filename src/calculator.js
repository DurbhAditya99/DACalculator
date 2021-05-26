import React from 'react'
import { useState } from 'react'
import { useHistory }  from 'react-router-dom'

const Calc =() => {
    
    var [ans,setAns] = useState('0');
    var [status,setStatus] = useState(false) ;
    const [error,setError] = useState(null)
    const [clc,setClc] = useState(true)
    const history = useHistory();

    const reset=()=>{
        setError(null);
        setStatus(false) 
        setAns('0');
        history.push("/")
    }

    const Calculate = (v) => {      

        var z;
        try{
            z=eval(v);
            
        } catch (e){
            z='';
            alert(e.message)    
            return
            console.clear()

        }
        
        setAns(z);
        
        setStatus(true);
         
    
    }

    const addInput=(x)=>{
        if (ans[ans.length-1]==='*' || ans[ans.length-1]==='/' || ans[ans.length-1]==='+'|| ans[ans.length-1]==='-' ){
            if (x==='0'){
                return
            }

        }
        
        if (status === true || ans[0] ==='0' ){
        
        if ( ans[0]==='0' && ans[1]==='.') {
            setAns(ans+x)
            return
        }   
        setAns(x)
        setStatus(false)
        
        
        } else{
       setAns(ans+x)
        }
    }

    const addOper=(x)=>{
        setAns(ans+x)
        setStatus(false)
    }

    
    const backspace=()=>{
        if (status===true){
            reset();
            return
        }
        var y= ans.slice(0,ans.length-1)
        setAns(y)
    }

      return (
          
          <div className='calc'>
              <h1>DA CALCULATOR </h1>
              
            <input
                type="string" readOnly
                value={ans}
             />
             <div>{error}</div>
             <div className='keypad'>
                <button onClick={()=>addInput('(')}>(</button>
                <button onClick={()=> reset()}>Clear all</button>
                <button onClick={()=>addInput(')')}>)</button>
                <button onClick={()=>addOper('+')}>+</button>
                
               
                <button onClick={()=>addInput('7')} value='7'>7</button>
                <button onClick={()=>addInput('8')}>8</button>
                <button onClick={()=>addInput('9')}>9</button>
                <button onClick={()=>addOper('/')}>/</button>
               
                <button onClick={()=>addInput('4')}>4</button>
                <button onClick={()=>addInput('5')}>5</button>
                <button onClick={()=>addInput('6')}>6</button>
                <button onClick={()=>addOper('*')}>X</button>
               
               
                <button onClick={()=>addInput('1')}>1</button>
                <button onClick={()=>addInput('2')}>2</button>
                <button onClick={()=>addInput('3')}>3</button>
                <button onClick={()=>addOper('-')}>-</button>
               
                <button onClick={()=>addOper('.')}>.</button>
                <button onClick={()=>addInput('0')}>0</button>
                <button onClick={()=> backspace()}>Backspace</button>
              
                <button onClick={()=>{  
                                        Calculate(ans) 
                                       // if(ans==="Error!!"){
                                         //   reset()
                                       // }
                                        

                                                         }}>=</button>
             
                                                         
                
             </div>
             </div>

      ) }
    
  

export default Calc;
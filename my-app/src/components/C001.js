import React from 'react'
import './C001.css'
export default function C001() {
    function companyName(){
return "little Bird"
    }
    // function slogon(){
    //     return (
    //         <div className="myfooter">
    //         "bird get you what you want !!!"</div>)
    // }
    // const thisYear =2021

const slogon = ()=>{
    return (
                 <div className="myfooter">
                 "bird get you what you want !!!"</div>)
         }
         const thisYear =2021

    return (
        <div>
            <h1> this is<br/>
            {companyName()}<br/> company<br/> <br/>
            {slogon()}
            </h1>
            <h3 className="myfooter"> copy rights {thisYear}</h3>
        </div>
    )
}


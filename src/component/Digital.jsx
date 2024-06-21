import { useEffect, useState } from "react"
import style from "./digital.module.css";
export default function Digital(){
    const[time,setTime]=useState(new Date())
    useEffect(() =>{
        const intervalId=setInterval(()=>{
            setTime(new Date())
        },1000)
        return ()=>{
            clearInterval(intervalId)
        }
    }, [])
    const formatTime=()=>{
        let hours=time.getHours()
        const minutes=time.getMinutes();
        const seconds=time.getSeconds();
        const meridian=hours >=12 ?"PM": "AM"
        hours= hours %12 || 12
        return`${zero(hours)}:${zero(minutes)}:${zero(seconds)} ${zero(meridian)}`
    }
    const zero=(number)=>{
        return(number <10 ? "0" : "")+number
    }
    return(
        <div className="one ">
            <h1 className="text-2xl font-extrabold sm:text-[5rem] text-blue-600 mb-[40px] text-center justify-between">Digital Watch</h1>
        <div className="text-center text-4xl sm:text-[10rem] font-semibold text-orange-500 bg-orange-500 bg-opacity-10 h-screen sm:pt-44">
            <span className="]">{formatTime()}</span>
        </div>
        <div className={style.footer}>
                Created by Collins
            </div>
    </div>
    )
}
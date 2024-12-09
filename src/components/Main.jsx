import React, { useRef } from 'react'
import { ncypher, ndecypher } from '../scripts/cyphers.js';
import { MdContentCopy } from "react-icons/md";
import { BsArrowLeftRight, BsArrowDownUp } from "react-icons/bs";


const Main = () => {
    const input = useRef(null);
    const output = useRef(null);
    const key = useRef(null);

    const width = window.innerWidth;

    const cypher = () => {
        output.current.value = ncypher(input.current.value, key.current.value);
    }

    const decypher = () => {
        output.current.value = ndecypher(input.current.value, key.current.value);
    }

    const swap = () => {
        const temp = output.current.value;
        output.current.value = input.current.value;
        input.current.value = temp;
    }

    const copy = () => {
        
        navigator.clipboard.writeText(output.current.value);
    }


  return (
    <div>

        <h1 className='text-4xl md:text-6xl text-bold text-cOne text-center m-4'><b>nCypher</b></h1>

        <div className='flex flex-wrap justify-center items-center m-5'>
            <h1 className='text-bold text-cOne text-2xl'><b>Cypher key:</b></h1>
            <input type='password' ref={key} className='drop-shadow-2xl p-1 mx-2 border-2 border-cTwo rounded-lg bg-cFour' />
        </div>

        <div className='md:flex justify-center m-5'>

            <div className='flex justify-center'>
                <textarea rows={10} cols={width > 768 ? width/20 : width/10} className='drop-shadow-2xl p-2 m-2 border-2 border-cTwo rounded-lg bg-cFour' ref={input}/>
            </div>

            <div className='flex md:flex-col justify-around items-center md:py-6'>
                <div className='w-fit h-fit p-2 bg-cFive hover:drop-shadow-2xl rounded-full text-white select-none hover:cursor-pointer' onClick={cypher}>
                    <b><h1>Cypher</h1></b>
                </div>
                <div className='w-fit h-fit p-2 bg-cFive hover:drop-shadow-2xl rounded-full text-white select-none hover:cursor-pointer' onClick={swap}>
                    <h1> {width > 768 ? <BsArrowLeftRight color='ffffff' size={30} /> : <BsArrowDownUp color='ffffff' size={30} />} </h1>
                </div>
                <div className='w-fit h-fit p-2 bg-cFive hover:drop-shadow-2xl rounded-full text-white select-none hover:cursor-pointer' onClick={copy}>
                    <MdContentCopy color='ffffff' size={30} />
                </div>
                <div className='w-fit h-fit p-2 bg-cFive hover:drop-shadow-2xl rounded-full text-white select-none hover:cursor-pointer' onClick={decypher}>
                    <b><h1>Decypher</h1></b>
                </div>
            </div>

            <div className='flex justify-center'>
                <textarea rows={10} cols={width > 768 ? width/20 : width/10} className='drop-shadow-2xl p-2 m-2 border-2 border-cTwo rounded-lg bg-cFour' ref={output}/>
            </div>

        </div>

    </div>
  )
}

export default Main
import {RiReactjsLine} from "react-icons/ri"
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaNodeJs as FaNode } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-10 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap flex-center items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoSpringBoot className="text-7xl "/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiExpress className="text-7xl text-green-500"/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNode className="text-7xl text-red-700"/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoPostgresql className="text-7xl text-sky-700"/>
            </div>
        </div>
    </div>
  )
}

export default Technologies

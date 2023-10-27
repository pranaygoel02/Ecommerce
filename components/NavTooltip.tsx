"use client"
import Link from "next/link";
import Popup from "./Popup";
import { ReactNode } from "react";
import {useSession} from "next-auth/react";

function NavTooltip({icon, name, link, num} : {
    icon: ReactNode,
    name: string,
    link: string,
    num: number
}) {

    const {data: session, status} = useSession()

    const isAuthenticated = status === 'authenticated'

    return (
    <Link className="inline-flex items-center gap-1 relative" href={(isAuthenticated ? "/account" : "" )+ link}>{icon} <span className="hidden lg:block">{name}</span><Popup name={name} num={num}/></Link>
    )
}

export default NavTooltip
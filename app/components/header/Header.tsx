import React from "react";
import headerStyle from "./header.module.css";
console.log(headerStyle,"CSS-Style");

export default function Header () {
    return (
        <>
        <ul className={headerStyle.style}>
            <h1 className={headerStyle.h1}>LOGO</h1>
            <a href="/">Home </a>
            <a href="/about">About </a>
            <a href="/contact">Contact </a>
            <a href="/service">Service </a>
        </ul>
        </>
    );
}
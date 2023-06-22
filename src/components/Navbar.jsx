"use client";

import { Navbar } from "flowbite-react";
import Logo from "./../assets/ppq-w.png";
import "./../css/dekstop.css";

export default function Navigation() {

    return (
        <div className="bg-slate-300 w-11/12 m-auto">
            <Navbar id="navbar">
                <Navbar.Brand>
                    <img
                        alt="PPQITA Logo"
                        className="mr-3 h-6 sm:h-9"
                        src={Logo}
                    />
                </Navbar.Brand>
                <div>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link active href="#home">
                        <p>Home</p>
                    </Navbar.Link>
                    <Navbar.Link href="#gallery">Gallery Kegiatan</Navbar.Link>
                    <Navbar.Link href="#about">About</Navbar.Link>
                    <Navbar.Link href="#unit">
                        Unit Unit PPQ Al Mahir
                    </Navbar.Link>
                    <Navbar.Link href="#contact">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

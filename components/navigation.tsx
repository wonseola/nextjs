"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
    const path = usePathname();
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <h1>
                    <span>bom's</span>
                    <span>&nbsp;</span>
                    <span>movies</span>
                    {/* <span>b</span>
                    <span>o</span>
                    <span>m</span>
                    <span>'</span>
                    <span>s</span>
                    <span>&nbsp;</span>
                    <span>m</span>
                    <span>o</span>
                    <span>v</span>
                    <span>i</span>
                    <span>e</span>
                    <span>s</span> */}
                </h1>

            </div>
            <ul><li>
                <Link href="/">Home</Link>
                {path === "/" ? "💙" : ""}
            </li>
                <li>
                    <Link href="/about-us">About Us</Link>
                    {path === "/about-us" ? "💙" : ""}
                </li>
            </ul>
        </nav>
    )
}
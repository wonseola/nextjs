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
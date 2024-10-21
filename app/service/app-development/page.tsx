import Link from "next/link"

export default function AppDevelopment () {
    return(
        <div>
            <ul>
        <li><Link href="/">Home </Link></li>
        <li><Link href="/about">About </Link></li>
        <li><Link href="/contact">Contact </Link></li>
        <li><Link href="/service">Service </Link></li>
        <li><Link href="/service/app-development">App-development</Link></li>
        <li><Link href="/service/website-development">Website-development</Link></li>
      </ul>
            <h1>In this service page i create an app-development page "nested page"</h1>
        </div>
    );
}
import Link from "next/link";
import type { NextraThemeLayoutProps } from "nextra";
import "@shawnsandy/first-paint/dist/css/libs/all.min.css";
import { PG } from "@fpkit/nextjs";
export default function Layout({ children, pageOpts }: NextraThemeLayoutProps) {
  const { pageMap } = pageOpts;

  return (
    <div>
      <PG.Nav>
        <div>
          <a href="/">Home</a>
        </div>
        <ul>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </PG.Nav>
      <h1>My Theme</h1>
      {pageMap.map((item) => {
        if (item.kind === "MdxPage") {
          return (
            <Link key={item.name} href={item.route}>
              {item.route}
            </Link>
          );
        }
        return null;
      })}
      <div style={{ border: "1px solid" }}>{children}</div>
    </div>
  );
}

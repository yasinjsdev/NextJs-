import Link from "next/link";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main
          style={{
            padding: 40,
          }}
        >
          <h1>Dashboard Layout</h1>
          <div
            style={{
              marginBottom: 20,
              padding: 20,
              backgroundColor: "#f0f0f0",
            }}
          >
            <p>
              This is the dashboard layout. It will wrap all pages under
              /dashboard.
            </p>
            <ul>
              <li>
                <Link href="/dashboard">Dashboard Home</Link>
              </li>
              <li>
                <Link href="/dashboard/settings">Dashboard Settings</Link>
              </li>
              <li>
                <Link href="/dashboard/profile">Dashboard Profile</Link>
              </li>
            </ul>
          </div>
          <div
            style={{
              padding: 20,
              backgroundColor: "#e0e0e0",
            }}
          >
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

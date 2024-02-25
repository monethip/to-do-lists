import Header from "@/components/Header";
import "../app/globals.css";

 
export default function Layout({ children }: Readonly<{ children: React.ReactNode;}>) {
  return (
    <>
      <Header/>
      <main className="max-w-screen-xl mx-auto p-4">{children}</main>
    </>
  )
  }
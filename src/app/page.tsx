import Image from "next/image";
import "./globals.css";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/exameConciencia");
  return <div className="min-h-[calc(100vh-500px)]"></div>;
}

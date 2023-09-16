'use client'
import Header from "@/components/Header"
import Screen from "@/components/Screen"
import LinksForm from "@/components/LinksForm"

export default function Home() {
  return (
    <main className="bg-cgray mx-3 h-full">
      <Header/>
      <div className="flex gap-x-3 mt-5">
        <Screen/>
        <LinksForm/>
      </div>
    </main>
  )
}

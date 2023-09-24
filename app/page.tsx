'use client'
import Header from "@/components/Header"
import Screen from "@/components/Screen"
import LinksForm from "@/components/LinksForm"

export default function Home() {
  return (
    <main className="flex flex-col gap-2">
      <Header/>
      <div className="flex gap-x-3">
        <Screen/>
        <LinksForm/>
      </div>
    </main>
  )
}

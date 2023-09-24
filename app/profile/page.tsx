'use client'
import Header from "@/components/Header"
import ProfileForm from "@/components/ProfileForm"
import Screen from "@/components/Screen"

export default function Page() {
    return (
        <div className="flex flex-col gap-2">
            <Header />
            <div className="flex gap-x-3">
                <Screen />
                <ProfileForm />
            </div>
        </div>
    )
}
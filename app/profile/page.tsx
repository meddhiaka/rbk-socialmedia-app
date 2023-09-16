'use client'
import Header from "@/components/Header"
import ProfileForm from "@/components/ProfileForm"
import Screen from "@/components/Screen"

export default function Page() {
    return (
        <div>
            <Header />
            <div className="flex gap-x-3 mt-5">
                <Screen />
                <ProfileForm />
            </div>
        </div>
    )
}
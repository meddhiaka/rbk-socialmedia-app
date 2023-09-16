'use client'

import { createContext, useContext, Dispatch, SetStateAction, useState } from 'react'

interface ContextProps {
    firstName: string,
    setFirstName: Dispatch<SetStateAction<string>>,
    lastName: string,
    setLastName: Dispatch<SetStateAction<string>>,
    emailAddress: string,
    setEmailAdress: Dispatch<SetStateAction<string>>,
    profilePicture: string | ArrayBuffer | null,
    setProfilePicture: Dispatch<SetStateAction<string | ArrayBuffer | null>>,
    links: {
        platformName: string,
        platformLink: string
    }[],
    setLinks: Dispatch<SetStateAction<{
        platformName: string,
        platformLink: string
    }[]>>
}

const GlobalContext = createContext<ContextProps>({
    firstName: '',
    setFirstName: () => { },
    lastName: '',
    setLastName: () => { },
    emailAddress: '',
    setEmailAdress: () => { },
    profilePicture: '',
    setProfilePicture: () => { },
    links: [],
    setLinks: () => { }
})

export const GlobalContextProvider = ({ children }) => {
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [emailAddress, setEmailAdress] = useState<string>('')
    const [profilePicture, setProfilePicture] = useState<string | ArrayBuffer | null>('')
    const [links, setLinks] = useState<{
        platformName: string,
        platformLink: string }[]>([])
    return (
        <GlobalContext.Provider value={{ firstName, setFirstName, lastName, setLastName, emailAddress, setEmailAdress, profilePicture, setProfilePicture, links, setLinks }}>
            {children}
        </GlobalContext.Provider>
    )
}


export const useGlobalContext = () => useContext(GlobalContext)
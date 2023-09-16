'use client'
import React, { ReactNode } from 'react';
import { createContext, useContext, Dispatch, SetStateAction, useState } from 'react'

interface ContextProps {
    firstName: string,
    setFirstName: Dispatch<SetStateAction<string>>,
    lastName: string,
    setLastName: Dispatch<SetStateAction<string>>,
    emailAddress: string,
    setEmailAdress: Dispatch<SetStateAction<string>>,
    profilePicture: string,
    setProfilePicture: Dispatch<SetStateAction<string>>,
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
export const GlobalContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [emailAddress, setEmailAdress] = useState<string>('')
    const [profilePicture, setProfilePicture] = useState<string>('')
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
import { useGlobalContext } from "@/context/AppContext"
import { use, useState } from "react"
import { toast } from "react-toastify"
import { useEffect } from "react"
import { BsImage } from 'react-icons/bs'



export default function ProfileForm() {

    const { firstName, setFirstName, lastName, setLastName, emailAddress, setEmailAdress, profilePicture, setProfilePicture } = useGlobalContext()
    const [imgOk, setImgOk] = useState(false)
    // console.log(e.target.files)
    // const data = new FileReader()
    // data.addEventListener('load', () => {
    //     setProfilePicture(data.result)
    // }


                // <div 
                //     className="w-4/5 bg-contain h-[450px] bg-center bg-no-repeat relative"
                //     style={{
                //         backgroundImage: `url('/smartphone.png')`
                //     }}
                // >
                //     <p className="fixed top-44 left-28">u</p>
                // </div>
    console.log(profilePicture)
    return (
        <div className="bg-cwhite w-full md:w-3/5 h-400px p-5">
            <p className="text-2xl font-medium my-5">Profile Details</p>
            <p className="text-xs font-light">Add your details to create a personal touch to your profile.</p>
            <div className="mt-4 bg-cgray p-4 rounded-md flex  flex-col md:flex-row  items-center justify-between">
                <p className="mb-3 font-light text-xs">Profile Picture</p>
                <div className="flex flex-row">
                    <div 
                        className="w-36 h-36 bg-transparent rounded-md relative bg-cover shadow-lg bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url('${profilePicture}')`,
                            filter:  'brightness(0.5) ', 
                        }}
                    >
                        <BsImage className="text-white mx-auto mt-10 z-50" style={{ filter: 'none' }}/>
                        <p className="text-white text-sm font-medium mt-2 text-center" style={{ filter: 'none' }}>Change Image</p>
                        <input 
                            type="file"
                            className="absolute inset-0 z-30 opacity-0 cursor-pointer"
                            onChange={(e) => {

                                const imgPreview = e.target.files[0]
                                const fileExtension = e.target.files[0].name.split('.').pop().toLowerCase();
                                
                                if (!(fileExtension === "png" || fileExtension === "jpg" || fileExtension === "jpeg" || fileExtension === "bmp")) {
                                    toast.warn('Image not valid, check the requirements', {
                                        position: "bottom-center",
                                        autoClose: 5000,
                                        hideProgressBar: true,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: false,
                                        progress: undefined,
                                        theme: "dark",
                                    });
                                    return;
                                }

                                if (imgPreview) {
                                    const reader = new FileReader();
                                    reader.onload = (e) => {
                                      const img = new Image()
                                      img.src = e.target.result
                              
                                      img.onload = () => {
                                        if(img.width > 1024 || img.height > 1024) {
                                            toast.warn('Image must be below 1024x1024px!', {
                                                position: "bottom-center",
                                                autoClose: 5000,
                                                hideProgressBar: true,
                                                closeOnClick: true,
                                                pauseOnHover: true,
                                                draggable: false,
                                                progress: undefined,
                                                theme: "dark",
                                            });
                                            return
                                        }
                                      };
                                    };
                                }


                                const data = new FileReader()

                                data.addEventListener('load', () => {
                                    setProfilePicture(data.result)
                                })
                                console.log(data.result)
                                data.readAsDataURL(e.target.files[0])
                                setImgOk(true)
                                localStorage.setItem('profilePicture', profilePicture)
                            }}
                        />
                    </div>
                    <div className="flex flex-col justify-center mx-1 w-4/5 ml-2 m-1">
                        <p className="text-xs text-gray-600 font-light">Image must be below 1024x1024px.</p>
                        <p className="text-xs text-gray-600 font-light">Use PNG, JPG or BMP format.</p>
                    </div>
                </div>
            </div>
            <form 
                className="mt-4 bg-cgray p-4 rounded-md flex flex-col"
            >
                <div className="flex flex-row justify-between items-center mb-4">
                    <label htmlFor="name" className="inline-block text-xs text-gray-700 font-light w-1/2 md:w-auto">First name*</label>
                    <input type="text" value={firstName} id="name" onChange={(e) => setFirstName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cpurple focus:border-cpurple inline-block w-80 p-2" placeholder="Put your first name" />
                </div>
                <div className="flex flex-row justify-between items-center mb-4">
                    <label htmlFor="lastname" className="text-xs text-gray-700 font-light w-1/2 md:w-auto">Last name*</label>
                    <input type="text" value={lastName} id="lastname" onChange={(e) => setLastName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cpurple focus:border-cpurple inline-block w-80 p-2" placeholder="Put your last name" />
                </div>
                <div className="flex flex-row justify-between items-center mb-4">
                    <label htmlFor="email" className="text-xs text-gray-700 font-light w-1/2 md:w-auto">Email name*</label>
                    <input type="email" value={emailAddress} id="email" onChange={(e) => setEmailAdress(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cpurple focus:border-cpurple inline-block w-80 p-2" placeholder="name@email.domain" />
                </div>
            </form>
            <div className="flex justify-end border-[1px] border-t-gray-300 border-white pt-2 mb-5">
                <button 
                    className="px-3 mr-3 rounded-md bg-cpurple hover:bg-purple-900 flex items-center h-9 border border-cpurple text-xs font-semibold text-clightpurple"
                    type="submit"
                    onClick={() => {
                        if (firstName.length === 0 || lastName.length === 0 || emailAddress.length === 0) {
                            toast.warn('The name, last name, and email fields cannot be left empty.', {
                                position: "bottom-center",
                                autoClose: 5000,
                                hideProgressBar: true,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: false,
                                progress: undefined,
                                theme: "dark",
                            });
                            return
                        }

                        const RegExpName = /^[a-zA-Z ]{4,10}$/
                        if(!RegExpName.test(firstName) && !RegExpName.test(lastName)) {
                            toast.warn('Provide valid name & last name', {
                                position: "bottom-center",
                                autoClose: 5000,
                                hideProgressBar: true,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: false,
                                progress: undefined,
                                theme: "dark",
                            });
                            return
                        }

                        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
                        if(!emailRegex.test(emailAddress)) {
                            toast.warn('Provide valid email address', {
                                position: "bottom-center",
                                autoClose: 5000,
                                hideProgressBar: true,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: false,
                                progress: undefined,
                                theme: "dark",
                            });
                            return
                        }

                        if(!imgOk) {
                            toast.warn('Upload your profile picture!', {
                                position: "bottom-center",
                                autoClose: 5000,
                                hideProgressBar: true,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: false,
                                progress: undefined,
                                theme: "dark",
                            });
                            return
                        }

                        localStorage.setItem('name', firstName)
                        localStorage.setItem('lastname', lastName)
                        localStorage.setItem('email', emailAddress)
                        
                        setImgOk(false)
                        
                        toast.success('Done now check the Preview page ;)', {
                            position: "bottom-center",
                            autoClose: 5000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: false,
                            progress: undefined,
                            theme: "light",
                        });
                    }}
                >
                    Save
                </button>
            </div>
        </div>
    )
}
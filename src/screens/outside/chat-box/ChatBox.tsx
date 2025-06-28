import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdChatboxes } from "react-icons/io";

type MessageType = {
    user: number,
    message: string
}

export default function ChatBox() {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(true);
    const [message, setMessage] = useState("");

    const [datas, setDatas] = useState<MessageType[]>([
        {
            'user': 0,
            'message': 'Bonjour je suis votre assistant, comment puis-je vous aider ?'
        },
        // {
        //     'user': 1,
        //     'message': 'J\'ai be soin de savoir quels sont vos différents services svp.'
        // },
        // {
        //     'user': 0,
        //     'message': 'Nous sommes spécialisé dans diverses services notamment ...'
        // },
        // {
        //     'user': 1,
        //     'message': 'Merci pour ta réponse!'
        // },
    ]);

    const openChat = () => {
        setIsOpen(true);
        setIsClosing(false);
    };

    const closeChat = () => {
        setIsClosing(true);
        setTimeout(()=>{
            setIsOpen(false);
        }, 300)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        message != "" && setDatas([...datas, {"user":1, "message":message}])
        // alert('Message envoyé avec succès !');
        
    }

    return (
        <>

            <div className="fixed right-4 md:right-20 bottom-4 md:bottom-10 z-50 gap-y-6">
                <div className="flex w-full my-6" >

                    {
                        isOpen ? (
                            <div className="flex p-3 bg-colorDark dark:bg-colorWhite rounded-full cursor-pointer" title="Close chat" onClick={closeChat}>
                                <AiOutlineClose className="text-4xl text-colorOrange animate__animated animate__fadeIn" />

                            </div>
                        ) : (
                            <div className="flex p-3 bg-colorDark dark:bg-colorWhite rounded-full cursor-pointer img_translate" title="Chat with me" onClick={openChat}>
                                <IoMdChatboxes className="text-4xl text-colorOrange animate__animated animate__fadeIn" />
                            </div>
                        )
                    }

                </div>

                {
                    isOpen && (
                        <div className={`flex flex-col w-80 md:w-96 h-[500px] bg-colorDark dark:bg-colorWhite ${isClosing ? 'animate-slide-down' : 'animate-slide-up'}`}>
                            <div className="flex flex-row w-full bg-colorOrange py-2 items-center gap-x-2">
                                <img src="/assets/logo-white.webp" className="w-20" alt="" />
                                <h2 className="text-colorWhite font-semibold">Mboko Technology</h2>
                            </div>

                            <div className="flex flex-col w-full h-full overflow-y-hidden bg-transparent justify-between">

                                <div className="flex-1 p-3 overflow-y-scroll">
                                    {
                                        datas.map((msg, index) => (
                                            <div key={index} className={`animate__animated animate__fadeIn text-sm`}>
                                                
                                                <div className={`${msg.user === 0 ? 'bg-colorOrange text-colorWhite' : 'bg-[#f1f1f1] text-colorDark'} my-2 py-2 px-2 rounded-md text-sm`}>
                                                    {
                                                        msg.message
                                                    }
                                                </div>

                                            </div>
                                        ))
                                    }

                                </div>

                                <div className="flex w-full">
                                    <form onSubmit={(e)=>handleSubmit(e)} className="flex flex-row w-full justify-center items-center">
                                        <input type="text" onChange={(e)=>setMessage(e.target.value)} value={message} className="py-2 px-4 w-4/5 dark:text-colorDark text-colorWhite outline-none dark:bg-[#f1f1f1] bg-gray-900" aria-rowcount={3} name="" placeholder="Entrez votre message" id="" />
                                        <button type="submit" className="w-1/5 py-2 bg-colorOrange text-colorDark dark:text-colorWhite font-semibold">Envoyer</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>

        </>
    )
}
import { useRef, useState } from "react"

const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div 
            className="space-y-3 mt-5 overflow-hidden border-b m"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-white font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-white">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

const Faqs = () => {

    const faqsList = [
        {
            q: "Comment puis-je payer?",
            a: " Vous pouvez payer en utilisant plusieurs options comme la carte de débit, la carte de crédit, le net-banking et même payer en personne dans l'une de nos agences."
        },
        {
            q: "Dois-je m'inscrire pour acheter un billet ?",
            a: "Itrane Voyage offre une flexibilité unique dans l'enregistrement des utilisateurs. Il n'est pas nécessaire de s'inscrire pour acheter des billets en ligne. Cependant, les voyageurs fréquents sont encouragés à s'inscrire sur Itrane Voyage afin de bénéficier des avantages d'Itrane Voyage tels que les points de récompense Itrane, etc."
        },
        {
            q: "Est-il sécurisé d'acheter un billet sur Itrane Voyage ?",
            a: "La sécurité du processus d'achat est une chose que nous prenons très au sérieux ; les commerçants avec lesquels nous travaillons pour le traitement des paiements sont expérimentés et connus pour leurs normes de sécurité élevées."
        },
        {
            q: "J'ai perdu mon billet. Que dois-je faire maintenant ?",
            a: "Une copie du billet vous aurait été envoyée par e-mail lors de votre réservation. Veuillez prendre une impression de ce courrier et la présenter au moment de l'embarquement. Si vous n'avez pas reçu le billet par e-mail, veuillez appeler l'un de nos centres d'appels et notre responsable vous en enverra une copie par courrier."
        },
        {
            q: "Puis-je annuler mon billet en ligne ?",
            a: "La plupart des billets peuvent être annulés en ligne. Cependant, certains billets ne peuvent être annulés que par l'intermédiaire de notre centre d'appels. Cependant, veuillez noter que les frais d'annulation et la période d'annulation peuvent différer pour des services de bus spécifiques. Veuillez contacter l'un de nos responsables pour obtenir des informations sur l'annulation d'un service spécifique."
        }
    ]
  
    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 lg:px-8">
            <div className="space-y-3 text-center">
                <h1 className="font-semibold pb-8 sm:text-5xl text-center title-font text-transparent bg-clip-text bg-gradient-to-br from-white to-white">
                    Frequently Asked Questions
                </h1>
                <p className="text-white max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            key={idx}
                            faqsList={item}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Faqs


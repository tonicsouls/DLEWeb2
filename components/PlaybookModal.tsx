import React, { useEffect } from 'react';

interface Experience {
    company: string;
    role: string;
    details: string[];
    logo: string;
}

interface GreatestHitsModalProps {
    onClose: () => void;
    engagements: Experience[];
}

const GreatestHitsModal = ({ onClose, engagements }: GreatestHitsModalProps) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    if (!engagements) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-start z-50 p-4 overflow-y-auto animate-fade-in"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="greatest-hits-title"
        >
            <div
                className="relative bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 w-full max-w-4xl my-8 transform transition-all animate-fade-in-up"
                onClick={(e) => e.stopPropagation()}
            >
                <header className="p-4 sm:p-6 flex justify-between items-center border-b border-gray-700 sticky top-0 bg-gray-800/80 backdrop-blur-sm rounded-t-2xl z-10">
                    <h2 id="greatest-hits-title" className="font-montserrat text-3xl font-bold text-white">
                        Greatest Hits
                    </h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors" aria-label="Close modal">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </header>

                <div className="p-8 md:p-12 space-y-10">
                    {engagements.map((item, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                            <div className="flex-shrink-0">
                                 <img src={item.logo} alt={`${item.company} logo`} className="h-20 w-20 rounded-full bg-white p-2 shadow-lg" />
                            </div>
                            <div className="flex-grow">
                                <h3 className="font-montserrat text-2xl font-bold text-white">{item.company}</h3>
                                <p className="text-blue-400 font-semibold mb-3">{item.role}</p>
                                <ul className="list-disc list-inside space-y-2 text-gray-300">
                                    {item.details.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GreatestHitsModal;

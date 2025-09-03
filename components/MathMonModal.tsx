import React, { useEffect } from 'react';

const MathMonModal = ({ onClose }: { onClose: () => void }) => {
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

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="relative bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 w-full max-w-6xl h-[90vh] transform transition-all duration-300 scale-95 animate-fade-in-up flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <header className="p-4 sm:p-6 flex justify-between items-center border-b border-gray-700 flex-shrink-0">
                    <h2 className="font-montserrat text-2xl font-bold text-white">MathMon Game</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </header>
                <div className="p-1 md:p-2 flex-grow bg-gray-800 rounded-b-2xl">
                    <iframe
                        src="https://tonicsouls.github.io/resume-and-CV/index.html"
                        title="MathMon Game"
                        frameBorder="0"
                        className="w-full h-full rounded-lg"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default MathMonModal;

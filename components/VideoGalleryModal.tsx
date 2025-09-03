
import React, { useState, useEffect } from 'react';

const VideoGalleryModal = ({ onClose, startVideoId }: { onClose: () => void, startVideoId?: string }) => {
    const videos = [
        { id: 'gKJgscVed_0', title: 'Justice of the Peace Campaign' },
        { id: 'eE5a26P4g68', title: 'Tarrant County School Board' },
        { id: 'aH1Fk6dO59c', title: 'Dallas County Municipal Court' },
        { id: 'mmkHWmDZ76E', title: 'Product Owner Demo: Affiniti' },
        { id: '8XQ79oJjgqA', title: 'NPI Corporate Overview' },
    ];

    const initialVideo = videos.find(v => v.id === startVideoId) || videos[0];
    const [selectedVideoId, setSelectedVideoId] = useState(initialVideo.id);

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
                className="relative bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 w-full max-w-4xl transform transition-all duration-300 scale-95 animate-fade-in-up"
                onClick={(e) => e.stopPropagation()}
            >
                <header className="p-4 sm:p-6 flex justify-between items-center border-b border-gray-700">
                    <h2 className="font-montserrat text-2xl font-bold text-white">Media Portfolio</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </header>

                <div className="p-4 md:p-8">
                    <div className="aspect-w-16 aspect-h-9 mb-6 rounded-lg overflow-hidden border border-gray-700">
                        <iframe
                            src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {videos.map(video => (
                            <div
                                key={video.id}
                                className={`cursor-pointer rounded-lg overflow-hidden border-2 transition ${selectedVideoId === video.id ? 'border-blue-500' : 'border-transparent hover:border-blue-400'}`}
                                onClick={() => setSelectedVideoId(video.id)}
                            >
                                <img
                                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                                    alt={video.title}
                                    className="w-full h-auto object-cover"
                                />
                                <p className="text-center bg-gray-800 text-white text-xs p-2 truncate">{video.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoGalleryModal;

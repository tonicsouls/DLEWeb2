
import React, { useEffect } from 'react';

// FIX: Added type for onClose prop
const CvModal = ({ onClose }: { onClose: () => void }) => {
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

    const handleDownload = () => {
        const printableContent = document.getElementById('cv-content')?.outerHTML;
        if (!printableContent) return;

        const printWindow = window.open('', '_blank');
        printWindow?.document.write(`
            <html>
                <head>
                    <title>Darryl Erby - Résumé</title>
                    <script src="https://cdn.tailwindcss.com"></script>
                     <style>
                        body { 
                            font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
                            -webkit-print-color-adjust: exact !important;
                            print-color-adjust: exact !important;
                        }
                        .text-gold-print { color: #4A5568 !important; }
                        .text-blue-print { color: #2B6CB0 !important; }
                        .border-blue-print { border-color: #2B6CB0 !important; }
                        .page-break { page-break-before: always; }
                    </style>
                </head>
                <body class="p-8">
                    ${printableContent}
                </body>
            </html>
        `);
        printWindow?.document.close();
        printWindow?.focus();
        setTimeout(() => {
            printWindow?.print();
            printWindow?.close();
        }, 250);
    };


    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-start z-50 p-4 overflow-y-auto"
            onClick={onClose}
        >
            <div 
                className="relative bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 w-full max-w-4xl my-8 transform transition-all duration-300 scale-95 animate-fade-in-up"
                onClick={(e) => e.stopPropagation()}
            >
                <header className="p-4 sm:p-6 flex justify-between items-center border-b border-gray-700 sticky top-0 bg-gray-800/80 backdrop-blur-sm rounded-t-2xl z-10">
                     <h2 className="font-montserrat text-2xl font-bold text-white">CV / Résumé</h2>
                     <div className="flex items-center space-x-4">
                        <button onClick={handleDownload} className="inline-flex items-center btn-primary font-bold py-2 px-5 rounded-full text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            Download PDF
                        </button>
                        <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                     </div>
                 </header>

                <div id="cv-content" className="p-8 md:p-12">
                    <div className="text-center border-b border-gray-600 pb-6 mb-6">
                        <h1 className="font-montserrat text-4xl font-black text-white">DARRYL ERBY</h1>
                        <p className="text-xl text-gold mt-1 text-gold-print">Lead AI Solutions Engineer & Enterprise Strategist</p>
                        <div className="flex justify-center items-center mt-2 space-x-2">
                             <p className="text-gray-400">darryl.erby@gmail.com | Dallas, TX</p>
                             <a href="https://www.linkedin.com/in/darrylerby/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gray-700 text-gray-300 px-2 py-1 rounded-md text-sm hover:bg-gray-600 transition">
                                <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h2 className="font-montserrat text-2xl font-bold text-blue-400 mb-3 border-b-2 border-blue-400 inline-block text-blue-print border-blue-print">Professional Summary</h2>
                            <p className="text-gray-300 leading-relaxed">Enterprise software solutions leader with a decade of experience driving strategic growth, demand generation, and high-value partnerships. Proven ability to collaborate with cross-functional teams in securing complex, multi-million-dollar contracts and consistently exceeding sales targets. Adept at navigating long sales cycles and building C-level rapport across verticals. Expert in implementing GTM strategies for IaaS, SaaS and PaaS solutions, addressing multi-team initiatives across the largest enterprises.</p>
                        </div>

                        <div>
                            <h2 className="font-montserrat text-2xl font-bold text-blue-400 mb-6 border-b-2 border-blue-400 inline-block text-blue-print border-blue-print">Professional Experience</h2>
                            
                            <h3 className="text-xl font-bold text-white mb-4 text-gold-print">Enterprise Software Sales</h3>
                            <div className="space-y-6">
                               <div className="pl-4 border-l-2 border-gray-700">
                                    <h4 className="text-lg font-bold text-white">SEEQ.COM</h4>
                                    <p className="font-semibold text-gray-400">Enterprise Account Executive (Semi & Pharma) | Mar 2025 - Aug 2025</p>
                                    <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                                        <li>Grew the Pfizer account from a $250k ARR deal to a multi-year agreement exceeding $1M in the first year.</li>
                                        <li>Expanded engagement with major pharmaceutical and manufacturing accounts like Novo Nordisk, Toyota, and Analog Devices by establishing new use cases and implementing advanced analytics solutions to reduce production defects and waste.</li>
                                    </ul>
                                    <div className="mt-3">
                                        <h5 className="text-sm font-bold text-blue-300">Tech:</h5>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {["Industrial Data Analytics", "Edge Analytics", "Time-Series Data Analytics"].map(skill => (
                                                <span key={skill} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <h5 className="text-sm font-bold text-blue-300">Methods:</h5>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {["Strategic Account Growth", "Value Selling", "Complex Solution Sales"].map(skill => (
                                                <span key={skill} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-4 border-l-2 border-gray-700">
                                    <h4 className="text-lg font-bold text-white">Papyrus Software</h4>
                                    <p className="font-semibold text-gray-400">Sales Director, Americas | Dec 2023 - Mar 2025</p>
                                    <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                                        <li>Managed $6M in annual billing across 40+ US-based customers for a PaaS BPM solution.</li>
                                        <li>Forged a strategic partnership with IBM to sell WatsonX and LLM solutions, achieving IBM Gold Partner status.</li>
                                        <li>Grew the customer success function and generated a pipeline exceeding 100% of a $1.5M quota.</li>
                                    </ul>
                                    <div className="mt-3">
                                        <h5 className="text-sm font-bold text-blue-300">Tech:</h5>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {["PaaS", "BPM", "Operations focused-ML", "GenAI (IBM WatsonX)", "LLMs"].map(skill => (
                                                <span key={skill} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                     <div className="mt-3">
                                        <h5 className="text-sm font-bold text-blue-300">Methods:</h5>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {["Channel Management", "Strategic Partnerships", "Customer Success Management"].map(skill => (
                                                <span key={skill} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-4 border-l-2 border-gray-700">
                                    <h4 className="text-lg font-bold text-white">Dragonboat.io</h4>
                                    <p className="font-semibold text-gray-400">Senior Enterprise Account Executive | Jun 2023 - Dec 2023</p>
                                     <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                                        <li>Recruited as the first Enterprise Account Executive to build the enterprise sales motion.</li>
                                        <li>Closed a strategic $56,000 SaaS deal with Toyota Connected North America and led an 8-week paid Proof of Concept with Cox Automotive.</li>
                                    </ul>
                                     <div className="mt-3">
                                        <h5 className="text-sm font-bold text-blue-300">Tech:</h5>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {["SaaS", "Jira Automation & Reporting", "Enterprise Planning Tools (PDLC)"].map(skill => (
                                                <span key={skill} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                     <div className="mt-3">
                                        <h5 className="text-sm font-bold text-blue-300">Methods:</h5>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {["Building Enterprise Sales Model", "POC Management"].map(skill => (
                                                <span key={skill} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-4 border-l-2 border-gray-700">
                                    <h4 className="text-lg font-bold text-white">Gluware Inc.</h4>
                                    <p className="font-semibold text-gray-400">Senior Enterprise Account Executive | Jan 2022 - Mar 2023</p>
                                    <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                                        <li>Exceeded a $1M quota by 225%, securing $2M in new contracts for network compliance solutions.</li>
                                        <li>Successfully launched and scaled new verticals in Defense and Oil & Gas, outperforming a team of 13 peers.</li>
                                        <li>Spearheaded a channel-led BDR team, forecasting $5M in new partner-driven revenue.</li>
                                    </ul>
                                     <div className="mt-3">
                                        <h5 className="text-sm font-bold text-blue-300">Tech:</h5>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {["Network Automation", "Network Compliance Solutions (Cisco/HPE)"].map(skill => (
                                                <span key={skill} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                     <div className="mt-3">
                                        <h5 className="text-sm font-bold text-blue-300">Methods:</h5>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {["New Vertical Development", "Channel-Led Growth", "RFP Management"].map(skill => (
                                                <span key={skill} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-4 border-l-2 border-gray-700">
                                    <h4 className="text-lg font-bold text-white">HyperVelocity Consulting</h4>
                                    <p className="font-semibold text-gray-400">Enterprise Account Executive | Aug 2021 - Jan 2022</p>
                                    <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                                       <li>Surpassed quota by 200%, closing over $500,000 in new software licensing and $350,000 in professional services migration contracts.</li>
                                       <li>Acquired key new logos, including Guitar Center and Sunrun Inc., driving significant ITSM transformation and M&A integration projects.</li>
                                    </ul>
                                    <div className="mt-3">
                                        <h5 className="text-sm font-bold text-blue-300">Tech:</h5>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {["Atlassian Cloud Migration", "ITSM Transformation Tools"].map(skill => (
                                                <span key={skill} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                     <div className="mt-3">
                                        <h5 className="text-sm font-bold text-blue-300">Methods:</h5>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                           {["New Logo Acquisition", "RFI Response", "M&A Integration Projects"].map(skill => (
                                                <span key={skill} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-4 border-l-2 border-gray-700">
                                    <h4 className="text-lg font-bold text-white">PDI Technologies</h4>
                                    <p className="font-semibold text-gray-400">Technical Sales Executive | Jan 2018 - Aug 2021</p>
                                    <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                                        <li>As product owner for a mobile SaaS app and POS system, increased recurring revenue by 20%.</li>
                                        <li>Drove $1.5M in new ARR over five years by hunting new logos and farming the existing client base with a SaaS loyalty platform.</li>
                                    </ul>
                                    <div className="mt-3">
                                        <h5 className="text-sm font-bold text-blue-300">Tech:</h5>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {["SaaS (Mobile Apps, Loyalty Platforms)", "Kiosk POS Systems"].map(skill => (
                                                <span key={skill} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                     <div className="mt-3">
                                        <h5 className="text-sm font-bold text-blue-300">Methods:</h5>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {["Product Ownership", "New Logo Hunting", "Account Farming"].map(skill => (
                                                <span key={skill} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                             <h2 className="font-montserrat text-2xl font-bold text-blue-400 mb-3 border-b-2 border-blue-400 inline-block text-blue-print border-blue-print">Education</h2>
                             <div className="space-y-4">
                                <div className="pl-4 border-l-2 border-gray-700">
                                    <h3 className="text-xl font-bold text-white">Louisiana State University, Shreveport</h3>
                                    <p className="text-gold font-semibold text-gold-print">MBA, Data Analytics Concentration</p>
                                    <p className="text-gray-400">Concentration in Data and AI, Auto-Regressive Integrated Moving Averages (ARIMA).</p>
                                </div>
                                 <div className="pl-4 border-l-2 border-gray-700">
                                    <h3 className="text-xl font-bold text-white">The University of Texas at Arlington</h3>
                                    <p className="text-gold font-semibold text-gold-print">B.Sc., Business Communication and Spanish</p>
                                </div>
                                <div className="pl-4 border-l-2 border-gray-700">
                                    <h3 className="text-xl font-bold text-white">AFS Intercultural Programs</h3>
                                    <p className="text-gold font-semibold text-gold-print">Student Exchange Program, Argentina</p>
                                    <p className="text-gray-400">Studied Humanities and Italian at the University of Santiago Del Estero.</p>
                                </div>
                             </div>
                        </div>
                        
                        <div>
                            <h2 className="font-montserrat text-2xl font-bold text-blue-400 mb-4 border-b-2 border-blue-400 inline-block text-blue-print border-blue-print">Skills</h2>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-lg font-bold text-white">Methodology</h4>
                                    <p className="text-gray-300 leading-relaxed">Strategic Partnerships, Channel Management, Demand Generation, Complex Sales Cycles, C-Level Negotiation, Value Selling, MEDDIC, Challenger Sales.</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white">Technical & Business Acumen</h4>
                                    <p className="text-gray-300 leading-relaxed">Cloud Sales (IaaS/SaaS/PaaS), GenAI Concepts, BPM, Time-Series Data Analytics, ARIMA Modeling, Enterprise Solution Planning.</p>
                                </div>
                                 <div>
                                    <h4 className="text-lg font-bold text-white">Verticals</h4>
                                    <p className="text-gray-300 leading-relaxed">Federal, SLED, Defense, Finance, Insurance, Energy, Retail, Pharmaceuticals, Semiconductors.</p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white">Technical</h4>
                                    <p className="text-gray-300 leading-relaxed">ERP – SQL | R, Python, ARIMA</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="font-montserrat text-2xl font-bold text-blue-400 mb-3 border-b-2 border-blue-400 inline-block text-blue-print border-blue-print">Certifications</h2>
                            <ul className="list-disc list-inside text-gray-300 space-y-1">
                                <li>IBM Professional Certificate: Generative AI, RAG and LLMs (Aug 2024)</li>
                                <li>Professional Scrum Master (PSM I)</li>
                                <li>Lean Six Sigma Green Belt (LSSGB)</li>
                                <li>Professional of Human Resource (PHR)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CvModal;

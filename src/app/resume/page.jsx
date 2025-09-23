const Resume = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-8">Resume</h1>
            <div className="text-center">
                <p className="text-lg mb-6">Download my latest resume to learn more about my experience and qualifications.</p>
                <a
                    href="./Kashmith_Samaranayaka.pdf"
                    download
                    className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent/80 text-primary font-medium rounded-lg transition-colors duration-200"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume (PDF)
                </a>
            </div>
        </div>
    );
}

export default Resume;
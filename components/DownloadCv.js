"use client"
import React from 'react'
import { useState } from 'react';
import Link from 'next/link'

const DownloadCv = () => {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = () => {
        setIsDownloading(true);
        const link = document.createElement("a");
        link.href = "/KBR_CV.pdf";
        link.download = "KBR_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setIsDownloading(false);
    };
    return (
        <button
            onClick={handleDownload}
            disabled={isDownloading}
            className='cursor-pointer'
        >
            {isDownloading ? "Downloading..." : "Download CV"}
        </button>
    )
} 
// 

export default DownloadCv

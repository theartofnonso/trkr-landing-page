import React from 'react';
import Image from "next/image";

const LoadingSpinner: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-4">
            <div className="animate-spin rounded-full h-28 w-28 flex items-center justify-center border-t-4 border-white border-solid">
                <Image
                    className="z-50"
                    src="/TRKR.png"
                    alt="TRKR logo"
                    width={60}
                    height={38}
                    priority
                />
            </div>
        </div>

    );
};

export default LoadingSpinner;
'use client';

import { useRef } from 'react';

export default function ScrollExample() {
    const targetRef = useRef(null);

    const handleScroll = () => {
        targetRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="p-6 space-y-10">
            <button
                onClick={handleScroll}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Scroll to Section
            </button>

            <div style={{ height: '1200px' }} /> {/* Spacer */}

            <div
                ref={targetRef}
                className="p-10 bg-yellow-200 border border-yellow-500 text-center text-xl rounded"
            >
            </div>
        </div>
    );
}

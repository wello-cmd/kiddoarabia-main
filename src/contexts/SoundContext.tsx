import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

type SoundType = 'hover' | 'click' | 'success' | 'error' | 'plop';

interface SoundContextType {
    playSound: (type: SoundType) => void;
    isSoundEnabled: boolean;
    toggleSound: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isSoundEnabled, setIsSoundEnabled] = useState(true);

    // Pre-load audio objects
    // Note: user would need to add these files to public/sounds/
    const [audioFiles] = useState<Record<SoundType, HTMLAudioElement | null>>({
        hover: new Audio('/sounds/hover.mp3'),
        click: new Audio('/sounds/click.mp3'),
        success: new Audio('/sounds/success.mp3'),
        error: new Audio('/sounds/error.mp3'),
        plop: new Audio('/sounds/plop.mp3'),
    });

    useEffect(() => {
        // Set volume for all sounds
        Object.values(audioFiles).forEach(audio => {
            if (audio) {
                audio.volume = 0.2; // Low volume for subtlety
            }
        });
    }, [audioFiles]);

    const toggleSound = () => setIsSoundEnabled(prev => !prev);

    const playSound = useCallback((type: SoundType) => {
        if (!isSoundEnabled) return;

        const audio = audioFiles[type];
        if (audio) {
            // Reset time to allow rapid re-playing
            audio.currentTime = 0;
            audio.play().catch(e => {
                // User interaction requirement might block auto-play initially
                // Silent catch to prevent console spam
            });
        }
    }, [isSoundEnabled, audioFiles]);

    return (
        <SoundContext.Provider value={{ playSound, isSoundEnabled, toggleSound }}>
            {children}
        </SoundContext.Provider>
    );
};

export const useSound = () => {
    const context = useContext(SoundContext);
    if (context === undefined) {
        throw new Error('useSound must be used within a SoundProvider');
    }
    return context;
};

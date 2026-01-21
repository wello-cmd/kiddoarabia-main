import React, { createContext, useContext, useState, ReactNode } from 'react';

type CursorType = 'default' | 'pointer' | 'text' | 'none';

interface InteractionContextType {
    cursorType: CursorType;
    setCursorType: (type: CursorType) => void;
    isHovering: boolean;
    setIsHovering: (hover: boolean) => void;
}

const InteractionContext = createContext<InteractionContextType | undefined>(undefined);

export const InteractionProvider = ({ children }: { children: ReactNode }) => {
    const [cursorType, setCursorType] = useState<CursorType>('default');
    const [isHovering, setIsHovering] = useState(false);

    return (
        <InteractionContext.Provider value={{ cursorType, setCursorType, isHovering, setIsHovering }}>
            {children}
        </InteractionContext.Provider>
    );
};

export const useInteraction = () => {
    const context = useContext(InteractionContext);
    if (context === undefined) {
        throw new Error('useInteraction must be used within an InteractionProvider');
    }
    return context;
};

// Helper hook for components to easily set cursor state on hover
export const useCursor = (type: CursorType = 'pointer') => {
    const { setCursorType, setIsHovering } = useInteraction();

    const onMouseEnter = () => {
        setCursorType(type);
        setIsHovering(true);
    };

    const onMouseLeave = () => {
        setCursorType('default');
        setIsHovering(false);
    };

    return { onMouseEnter, onMouseLeave };
};

import React, { useState, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
  className?: string;
  containerClassName?: string;
  blurDataURL?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMCAxNkMyMS4xMDQ2IDE2IDIyIDEzLjEwNDYgMjIgMTJDMjIgMTAuODk1NCAyMS4xMDQ2IDEwIDIwIDEwQzE4Ljg5NTQgMTAgMTggMTAuODk1NCAxOCAxMkMxOCAxMy4xMDQ2IDE4Ljg5NTQgMTYgMjAgMTZaIiBmaWxsPSIjOUM5Qzk5Ii8+CjxwYXRoIGQ9Ik0zMCAyOEgxMEMxMC41NTIzIDI4IDExIDI3LjU1MjMgMTEgMjdWMTVDMTEgMTQuNDQ3NyAxMC41NTIzIDE0IDEwIDE0SDlDOC40NDc3MiAxNCA4IDE0LjQ0NzcgOCAxNVYyN0M4IDI4LjY1NjkgOS4zNDMxNSAzMCAxMSAzMEgzMEMzMC41NTIzIDMwIDMxIDI5LjU1MjMgMzEgMjlDMzEgMjguNDQ3NyAzMC41NTIzIDI4IDMwIDI4WiIgZmlsbD0iIzlDOUM5OSIvPgo8L3N2Zz4K',
  className,
  containerClassName,
  blurDataURL,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  
  const [setNode, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div 
      ref={setNode} 
      className={cn("relative overflow-hidden", containerClassName)}
    >
      {/* Placeholder/Blur */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse">
          <div className="w-8 h-8 rounded-full bg-muted-foreground/20" />
        </div>
      )}

      {/* Actual Image */}
      {isVisible && (
        <img
          ref={imgRef}
          src={hasError ? placeholder : src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          loading="lazy"
          decoding="async"
          {...props}
        />
      )}
    </div>
  );
};

export default LazyImage;
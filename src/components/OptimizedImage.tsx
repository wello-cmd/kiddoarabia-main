import React, { useState, useRef, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { optimizeImageUrl } from '@/utils/performance';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
  containerClassName?: string;
  quality?: number;
  format?: 'webp' | 'jpg' | 'png';
}

/**
 * Optimized image component with lazy loading, modern formats, and performance features
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMCAxNkMyMS4xMDQ2IDE2IDIyIDEzLjEwNDYgMjIgMTJDMjIgMTAuODk1NCAyMS4xMDQ2IDEwIDIwIDEwQzE4Ljg5NTQgMTAgMTggMTAuODk1NCAxOCAxMkMxOCAxMy4xMDQ2IDE4Ljg5NTQgMTYgMjAgMTZaIiBmaWxsPSIjOUM5Qzk5Ii8+CjxwYXRoIGQ9Ik0zMCAyOEgxMEMxMC41NTIzIDI4IDExIDI3LjU1MjMgMTEgMjdWMTVDMTEgMTQuNDQ3NyAxMC41NTIzIDE0IDEwIDE0SDlDOC40NDc3MiAxNCA4IDE0LjQ0NzcgOCAxNVYyN0M4IDI4LjY1NjkgOS4zNDMxNSAzMCAxMSAzMEgzMEMzMC41NTIzIDMwIDMxIDI5LjU1MjMgMzEgMjlDMzEgMjguNDQ3NyAzMC41NTIzIDI4IDMwIDI4WiIgZmlsbD0iIzlDOUM5OSIvPgo8L3N2Zz4K',
  containerClassName,
  quality = 80,
  format = 'webp',
  className,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(priority ? optimizeImageUrl(src, width, format) : placeholder);
  const imgRef = useRef<HTMLImageElement>(null);
  
  const [setNode, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  // Preload critical images
  useEffect(() => {
    if (priority) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = optimizeImageUrl(src, width, format);
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [src, width, format, priority]);

  // Load image when visible or priority
  useEffect(() => {
    if ((isVisible || priority) && !isLoaded && !hasError) {
      setCurrentSrc(optimizeImageUrl(src, width, format));
    }
  }, [isVisible, priority, isLoaded, hasError, src, width, format]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setCurrentSrc(placeholder);
  };

  const aspectRatio = width && height ? (height / width) * 100 : undefined;

  return (
    <div 
      ref={setNode}
      className={cn("relative overflow-hidden", containerClassName)}
      style={{ aspectRatio: aspectRatio ? `${width}/${height}` : undefined }}
    >
      {/* Blur/Loading state */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse">
          <div className="w-8 h-8 rounded-full bg-muted-foreground/20" />
        </div>
      )}

      {/* Main image */}
      <picture>
        {/* Modern format sources */}
        {format === 'webp' && (
          <source 
            srcSet={optimizeImageUrl(src, width, 'webp')} 
            type="image/webp" 
          />
        )}
        
        <img
          ref={imgRef}
          src={currentSrc}
          alt={alt}
          width={width}
          height={height}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "transition-all duration-500 ease-out",
            isLoaded && !hasError ? "opacity-100 blur-0" : "opacity-0 blur-sm",
            "w-full h-full object-cover",
            className
          )}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          {...props}
        />
      </picture>
    </div>
  );
};

export default OptimizedImage;
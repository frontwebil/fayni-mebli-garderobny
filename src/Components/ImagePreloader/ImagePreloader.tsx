import { useState, type ImgHTMLAttributes } from "react";
import "./style.css";

interface ImagePreloaderProps extends ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
}

export function ImagePreloader({
  wrapperClassName = "",
  className = "",
  onLoad,
  ...imgProps
}: ImagePreloaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`image-preloader-wrapper ${wrapperClassName}`}>
      {!isLoaded && <div className="image-preloader-skeleton" />}
      <img
        {...imgProps}
        className={`${className} ${isLoaded ? "image-preloader-visible" : "image-preloader-hidden"}`}
        onLoad={(e) => {
          setIsLoaded(true);
          onLoad?.(e);
        }}
      />
    </div>
  );
}

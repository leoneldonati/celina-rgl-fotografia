import { useEffect, useState } from "react";
import asset1 from "@assets/carousel/1.avif";
import asset2 from "@assets/carousel/2.avif";
import asset3 from "@assets/carousel/3.avif";
import asset4 from "@assets/carousel/4.avif";
export default function Carousel() {
  const [position, setPosition] = useState(0);
  const assets = [asset1, asset2, asset3, asset4];

  useEffect(() => {
    const timer = setInterval(() => {
      setPosition((pos) => (pos === assets.length - 1 ? 0 : pos + 1));
    }, 2500);

    return () => clearInterval(timer);
  }, []);
  return (
    <picture className="max-h-full overflow-x-hidden relative rounded-md">
      <div
        className="flex transition-transform"
        style={{ transform: `translateX(-${position * 100}%)` }}
      >
        {assets.map((image, index) => (
          <img
            src={image.src}
            key={index}
            loading="lazy"
            width={image.width}
            height={image.height}
          />
        ))}
      </div>

      <div className="absolute bottom-2 z-10 grid place-items-center w-full">
        {assets.map((img, index) => (
          <span className=" w-2 h-2 rounded-full flex"></span>
        ))}
      </div>
    </picture>
  );
}

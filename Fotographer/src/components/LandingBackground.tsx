import React, { useEffect, useRef, useState } from 'react';

const images = [
  '/lovable-uploads/3b96b3c4-04a3-4de6-966b-5adb653d3f79.png',
  '/lovable-uploads/7de5f99b-32a0-4508-ba6a-c12710995a75.png',
  '/lovable-uploads/23a6efb3-6222-407b-b351-1d620c586bff.png',
  '/lovable-uploads/a8fc457b-c6b3-4b4c-bf57-33c439e5b9bd.png',
  '/lovable-uploads/b21c4a65-ccd1-41ae-8fc0-4e9200d3b7c6.png',
  '/lovable-uploads/cccaf66b-5429-4780-9974-f210f54c592f.png',
  '/lovable-uploads/e52aaaaf-50d5-43e9-b0fa-335b842e1fec.png',
  '/lovable-uploads/f01cf2a7-f937-48fd-bae4-cc9b5fa1d638.png',
];

const VISIBLE_DURATION = 4000; // 4 segundos visible
const FADE_DURATION = 1000;    // 1 segundo de transición

const LandingBackground: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [fading, setFading] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!fading) {
      timeoutRef.current = setTimeout(() => {
        let nextIndex;
        do {
          nextIndex = Math.floor(Math.random() * images.length);
        } while (nextIndex === current);
        setNext(nextIndex);
        setFading(true);
      }, VISIBLE_DURATION);
    } else {
      timeoutRef.current = setTimeout(() => {
        if (next !== null) {
          setCurrent(next);
          setNext(null);
        }
        setFading(false);
      }, FADE_DURATION);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current, fading, next]);

  return (
    <div className="fixed inset-0 -z-10 w-full h-full overflow-hidden" aria-hidden="true" tabIndex={-1}>
      {/* Imagen actual */}
      <img
        src={images[current]}
        alt="Fondo slideshow"
        className={`w-full h-full object-cover transition-opacity duration-1000 ${fading ? 'opacity-0' : 'opacity-100'}`}
        style={{ position: 'absolute', inset: 0 }}
        draggable={false}
      />
      {/* Imagen siguiente, solo durante el fade */}
      {fading && next !== null && (
        <img
          src={images[next]}
          alt="Fondo slideshow next"
          className="w-full h-full object-cover transition-opacity duration-1000 opacity-100"
          style={{ position: 'absolute', inset: 0 }}
          draggable={false}
        />
      )}
    </div>
  );
};

export default LandingBackground; 
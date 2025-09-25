import { useEffect, useRef } from 'react';

export const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3; // Set a reasonable volume
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          console.log('Audio autoplay prevented by browser');
        });
      }
    }

    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  return (
    <audio ref={audioRef} loop>
      <source src="/Parabens.mp3" type="audio/mpeg" />
    </audio>
  );
};
import React, { useState, useEffect } from "react";

interface TypingEffectProps {
  texts: string[]; // Array teks yang akan ditampilkan
  typingSpeed?: number; // Kecepatan mengetik dalam milidetik
  delayBetweenTexts?: number; // Waktu jeda antar teks dalam milidetik
  loop?: boolean; // Apakah efek mengetik akan diulang
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  texts,
  typingSpeed = 100,
  delayBetweenTexts = 1000,
  loop = true,
}) => {
  const [displayedText, setDisplayedText] = useState<string>(""); // Teks yang sedang ditampilkan
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0); // Indeks teks yang aktif
  const [charIndex, setCharIndex] = useState<number>(0); // Indeks karakter saat ini
  const [isDeleting, setIsDeleting] = useState<boolean>(false); // Apakah sedang menghapus teks

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      // Jika sedang menghapus, kurangi karakter
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, typingSpeed / 2); // Kecepatan menghapus lebih cepat
    } else {
      // Jika sedang mengetik, tambahkan karakter
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    }

    // Jika teks selesai diketik
    if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), delayBetweenTexts); // Tunggu sebelum menghapus
    }

    // Jika teks selesai dihapus
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentTextIndex((prev) =>
        loop ? (prev + 1) % texts.length : Math.min(prev + 1, texts.length - 1)
      ); // Pindah ke teks berikutnya (jika looping, ulang dari awal)
    }

    return () => clearTimeout(timeout); // Membersihkan timeout saat komponen di-unmount
  }, [
    charIndex,
    isDeleting,
    currentTextIndex,
    texts,
    typingSpeed,
    delayBetweenTexts,
    loop,
  ]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;

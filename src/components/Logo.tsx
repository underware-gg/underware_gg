// src/components/Logo.tsx

import Image from 'next/image';
import styles from './Logo.module.css';

export default function Logo({
  width = 300,
}: {
  width?: number;
}) {
  return (
    <div
      className={styles.revealWrapper}
      style={{ width, height: width }}
    >
      {/* visible image */}
      <Image
        src="/images/logo.jpg"
        alt="Logo"
        fill
        className={styles.visibleImage}
      />

      {/* hidden-on-hover image */}
      <Image
        src="/images/logo2.jpg"
        alt="Logo hover"
        fill
        className={styles.hiddenImage}
      />
    </div>
  );
}

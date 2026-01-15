import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <p className={styles.kicker}>404</p>
        <h1>Page not found</h1>
        <p className={styles.body}>
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link className={styles.homeLink} href="/">
          Back to home
        </Link>
      </div>
    </div>
  );
}

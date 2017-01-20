import styles from './header.css'

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        (Logo)
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>Articles</li>
          <li>Sermons</li>
          <li>Books</li>
          <li>Features</li>
          <li>Donate</li>
        </ul>
      </nav>
      <div>
        <div>
          (Search)
        </div>
      </div>
    </header>
  )
}

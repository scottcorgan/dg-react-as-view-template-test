export default function Header() {
  return (
    <header className='header'>
      <div className='header__logo'>
        (Logo)
      </div>
      <nav className='header__nav'>
        <ul>
          <li>Articles</li>
          <li>Sermons</li>
          <li>Books</li>
          <li>Features</li>
          <li>Donate</li>
        </ul>
      </nav>
      <div>
        <div className='header__search'>
          (Search)
        </div>
      </div>
    </header>
  )
}

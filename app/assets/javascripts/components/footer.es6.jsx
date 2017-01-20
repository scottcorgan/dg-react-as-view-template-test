import styles from './footer.css'

function onSubmit(e) {
  e.preventDefault()

  alert('submitted')
}

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div>
          <p>
            God is most glorified in us
            when we are most satisfied in him
          </p>
          <p>
            Learn more about Desiring God ->
          </p>
        </div>
        <div className={styles.dgsocial}>
          Social Stuff
        </div>
        <div>
          Social stuff
        </div>
        <form onSubmit={onSubmit}>
          <label>
            Email Updates
            <input type='text' /><button>Subscribe</button>
          </label>
        </form>
      </div>

      <ul className={styles.meta}>
        <li>Permissions</li>
        <li>Privacy</li>
        <li>Careers</li>
        <li>Donate</li>
      </ul>
    </footer>
  )
}

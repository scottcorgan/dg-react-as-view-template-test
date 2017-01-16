function onSubmit(e) {
  e.preventDefault()

  alert('submitted')
}

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <div className='footer__about'>
          <p>
            God is most glorified in us
            when we are most satisfied in him
          </p>
          <p>
            Learn more about Desiring God ->
          </p>
        </div>
        <div className='footer__dgsocial'>
          Social Stuff
        </div>
        <div className='fotoer__jpsocial'>
          Social stuff
        </div>
        <form className='footer__email' onSubmit={onSubmit}>
          <label>
            Email Updates
            <input type='text' /><button>Subscribe</button>
          </label>
        </form>
      </div>

      <ul className='footer__meta'>
        <li>Permissions</li>
        <li>Privacy</li>
        <li>Careers</li>
        <li>Donate</li>
      </ul>
    </footer>
  )
}

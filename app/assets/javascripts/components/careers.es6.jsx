import Button from './button.es6.jsx'
import Opportunities from './opportunities.es6.jsx'
import Share from './share.es6.jsx'

export default function Careers() {
  return (
    <div className="careers">
      <section className="careers__hero">
        <header>
          <h2>Careers</h2>
          <Share />
        </header>
        <div className="careers__herointro">
          <h3>
            We exist to share the truth that God is most glorified in us
            when we are most satisfied in him.
          </h3>
          <p>
            Desiring God is a web ministry with more than 10,000 resources to
            help people find truth, purpose, and satisfaction that will never
            end. <a href="">Watch this video to learn more</a>.
          </p>

          <Button>Inquire</Button>
        </div>
      </section>
      <section className="careers__reach">
        <header>
          <h3>Our Products and Reach</h3>
          <p>
            Through desiringGod.org and our three mobile apps, God is
            enabling us to reach new people all across the globe with our
            content.
          </p>
        </header>
        <ul className="">
          <li>Hey</li>
          <li>Hey</li>
          <li>Hey</li>
          <li>Hey</li>
          <li>Hey</li>
        </ul>
      </section>
      <Opportunities />
    </div>
  )
}

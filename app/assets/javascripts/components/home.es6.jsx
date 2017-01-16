import Header from './header.es6.jsx'
import Footer from './footer.es6.jsx'
import Careers from './careers.es6.jsx'
import RecentFeatures from './recent_features.es6.jsx'

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main role='main'>
        <Careers />
        <RecentFeatures />
      </main>
      <Footer />
    </div>
  )
}

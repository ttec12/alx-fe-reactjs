import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'

function App() {
  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
       <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
    </>
  )
}

export default App
import reactLogo from './assets/react.svg'

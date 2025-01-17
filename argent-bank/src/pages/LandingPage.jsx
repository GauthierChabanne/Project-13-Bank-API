import '../styles/LandingPage.css';
import Banner from '../components/Banner'
import LandingPageCard from '../components/LandingPageCard'
import chatIcon from '../assets/icon-chat.png'
import moneyIcon from '../assets/icon-money.png'
import securityIcon from '../assets/icon-security.png'

function LandingPage() {
  return (
    <main>
      <Banner />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <LandingPageCard
          img= {chatIcon}
          alt="Chat Icon"
          title="You are our #1 priority"
          text="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
        />
        <LandingPageCard
          img={moneyIcon}
          alt="Money Icon"
          title="More savings means higher rates"
          text="The more you save with us, the higher your interest rate will be!"
        />
        <LandingPageCard
          img={securityIcon}
          alt="Security Icon"
          title="Security you can trust"
          text="We use top of the line encryption to make sure your data and money
            is always safe."
        />
      </section>
    </main>
  );
}

export default LandingPage;

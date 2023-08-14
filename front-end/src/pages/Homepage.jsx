//Components
import Header from "../components/layout/Header.jsx";
import Tagline from "../components/tagline/Tagline.jsx";
import Footer from "../components/layout/Footer.jsx";
//CSS
import "../css/main.css";

//Import tagline icons
import chatIcon from "../assets/images/img/icon-chat.png";
import moneyIcon from "../assets/images/img/icon-money.png";
import securityicon from "../assets/images/img/icon-security.png";

function Homepage() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <Tagline
            title="You are our #1 priority"
            img={chatIcon}
            text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            alt="Chat Icon"
          />
          <Tagline
            title="More savings means higher rates"
            img={moneyIcon}
            text="The more you save with us, the higher your interest rate will be!"
            alt="Money Icon"
          />
          <Tagline
            title="Security you can trust"
            img={securityicon}
            text="We use top of the line encryption to make sure your data and money is always safe."
            alt="Security Icon"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Homepage;

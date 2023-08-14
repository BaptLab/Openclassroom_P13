import Button from "../Button/Button";
import RedirectButton from "../Button/RedirectButton";

function Account(props) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
        <p className="account-amount">$2,082.79</p>
        <p className="account-amount-description">Available Balance</p>
      </div>
      <Button>
        <RedirectButton action="View Transaction" url="/user/transactions" />
      </Button>
    </section>
  );
}

export default Account;

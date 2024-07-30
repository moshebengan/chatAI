import { SignIn } from "@clerk/clerk-react";
import "./signinpage.css";

const SigninPage = () => {
  return (
    <div className="signInPage">
      <SignIn path="/sign-in" />;
    </div>
  );
};

export default SigninPage;

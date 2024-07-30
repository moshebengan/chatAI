import { SignIn } from "@clerk/clerk-react";
import "./signinpage.css";

const SigninPage = () => {
  return (
    <div className="singInPage">
      <SignIn path="/sign-in" />;
    </div>
  );
};

export default SigninPage;

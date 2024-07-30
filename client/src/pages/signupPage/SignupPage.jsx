import { SignUp } from '@clerk/clerk-react'
import './signupPage.css'

const SignupPage = () => {
  return (
    <div className='signUpPage'>
      <SignUp path="/sign-up" signInUrl='/sign-in'/>
    </div>
  )
}

export default SignupPage

import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return <SignUp afterSignInUrl="/new-user" redirectUrl="/new-url" />
}

export default SignUpPage

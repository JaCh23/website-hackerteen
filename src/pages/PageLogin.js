import { Button } from "@material-ui/core";
import { FirebaseAuthConsumer } from "@react-firebase/auth";

function PageLogin() {
  const handleGoogleSignIn = (firebase) => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleAuthProvider);
  };

  return (
    <>
      <h1>Welcome Home, Hacker</h1>
      <FirebaseAuthConsumer>
        {({ firebase }) => (
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleGoogleSignIn(firebase)}
          >
            Sign in with Google
          </Button>
        )}
      </FirebaseAuthConsumer>
    </>
  );
}

export default PageLogin;

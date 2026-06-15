import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful");
      window.location.href = "admin.html";
    })
    .catch((error) => {
      alert(error.message);
      console.error(error);
    });
};
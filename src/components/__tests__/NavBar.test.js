import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import Navbar from "../Navbar";

test("renders NavBar", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

   // screen.debug();
   const signInLink = screen.getByRole('link', {name: 'Sign in'});
   expect(signInLink).toBeInTheDocument();
});

test("renders link to the user profile for a logged in user", async () => {
    render(
      <Router>
        <CurrentUserProvider>
          <Navbar />
        </CurrentUserProvider>
      </Router>
    );
  
    const profileAvatar = await screen.findByText("Profile");
    expect(profileAvatar).toBeInTheDocument();
  });
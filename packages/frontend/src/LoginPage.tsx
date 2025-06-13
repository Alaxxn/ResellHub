import "./LoginPage.css";
import React, { useActionState } from "react";
import { Link, useNavigate } from "react-router";


interface LoginProp{
    isRegistering : boolean;
    updateUser : React.Dispatch<React.SetStateAction<string>>;
    updateLogin : React.Dispatch<React.SetStateAction<boolean>>;
    updateToken: React.Dispatch<React.SetStateAction<string>>;
}

interface ActionResult {
  error: boolean;
  message: string;
}

export function LoginPage(props : LoginProp) {

  const usernameInputId = React.useId();
  const passwordInputId = React.useId();
  const navigate = useNavigate();
  
  async function handleRegister( username: string, password: string ): Promise<ActionResult> {
    const endpoint = "/auth/register";
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      const token = await response.text();
      props.updateLogin(true);
      props.updateUser(username);
      props.updateToken(token);
      navigate("/");
      return {
          error: false,
          message: `Successfully registered ${username}`,
      };
    }
    else {
      const errorData = await response.json();
      return {
        error: true,
        message: errorData.message || "Registration failed.",
      };
    }
  }

  async function handleLogin( username: string, password: string): Promise<ActionResult> {
    const endpoint = "/auth/login";
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      const token = await response.text();
      props.updateLogin(true);
      props.updateUser(username);
      props.updateToken(token);
      navigate("/");
      return {
        error: false,
        message: `Successfully logged in ${username}`,
      };
    } else {
      const errorData = await response.json();
      return {
        error: true,
        message: errorData.message || "Login failed.",
      };
    }
  }


  const [result, submitAction, isPending] = useActionState(
    async (_prev: unknown, formData: FormData): Promise<ActionResult> => {
      const username = formData.get("username") as string;
      const password = formData.get("password") as string;
      try {
        if (props.isRegistering) {
            return handleRegister(username, password);
        } else {
            return handleLogin(username, password);
        }
      } catch (err) {
        return {
          error: true,
          message: "Network error. Please try again later.",
        };
      }
    },
    null
  );

  return (
    <div className="content">
      <div className="form-container" 
      style={{ backgroundColor: "var(--color-background-page)"}}>
        <form action={submitAction} className="login-form">
          {props.isRegistering ? 
            ( <h2> Register </h2>) 
            :(  <h2> Login  </h2>)}

          <label htmlFor={usernameInputId}>Username</label>
          <input
            id={usernameInputId}
            name="username"
            type="text"
            placeholder="Enter your username"
            disabled={isPending}
            required
          />

          <label htmlFor={passwordInputId}>Password</label>
          <input
            id={passwordInputId}
            name="password"
            type="password"
            placeholder="Enter your password"
            disabled={isPending}
            required
          />

          <button type="submit" className="login-button">
            Log In
          </button>
        </form>
      </div>
      <div aria-live="polite" className="message-area">
          {isPending && <p className="message loading">Loading...</p>}
          {result?.message && (
            <p className={`message ${result.error ? "error" : "success"}`}>
              {result.message}
            </p>
          )}
      </div>
    {props.isRegistering ? 
    ( <Link to="/login" className="noBgColor"> Already have an account? Login here </Link>) 
    :( <Link  to="/register"  className="noBgColor"> Don't have an account? Register here </Link>)}
    </div>
  );
}




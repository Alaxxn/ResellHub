import "./LoginPage.css";
import React, { useActionState } from "react";
import { Link, useNavigate } from "react-router";


interface LoginProp{
    isRegistering : boolean;
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
    return {
        error: false,
        message: `Successfully registered ${username} with passowrd ${password}`,
    };
  }

  async function handleLogin( username: string, password: string ): Promise<ActionResult> {
    return {
        error: false,
        message: `Successfully registered ${username} with passowrd ${password}`,
    };
  }

  const [result, submitAction, isPending] = useActionState(
    async (_prev: unknown, formData: FormData): Promise<ActionResult> => {
      const username = formData.get("username") as string;
      const password = formData.get("password") as string;
      try {
        if (props.isRegistering) {
            navigate("/");
            return handleRegister(username, password);
        } else {
            navigate("/");
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
    <div>{result?.message}</div>
    {props.isRegistering ? 
    ( <Link to="/login" className="noBgColor"> Already have an account? Login here </Link>) 
    :( <Link  to="/register"  className="noBgColor"> Don't have an account? Register here </Link>)}
    </div>
  );
}

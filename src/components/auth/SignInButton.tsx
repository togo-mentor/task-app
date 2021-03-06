import React from "react";
import { useAuth } from "../../cognito/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button'

export default function SignInButton(props: any) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) return null;

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <Button onClick={handleClick} {...props}>
        SIGN IN
      </Button>
    </div>
  );
}

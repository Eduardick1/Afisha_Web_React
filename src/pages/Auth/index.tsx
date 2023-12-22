import React, { useState } from "react";
import styles from "./index.module.scss";
import LoginComp from "./Register";
import RegComp from "./Login";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/store";
import { setAuth } from "../../Redux/authSlice";
import {
  FormControl,
  useFormControl,
  OutlinedInput,
  FormHelperText,
  Input,
  InputLabel,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";

//IT'S NOT WORKING AUTH, JUST MOCK
const AUTH_FIELDS = [
  {
    id: "email-input",
    label: "Email address",
    idHelper: "my-helper-email-text",
    helperText: "Please enter your email",
  },
  {
    id: "password-input",
    label: "Password",
    idHelper: "my-helper-password-text",
    helperText: "Please enter your password",
  },
  {
    id: "name-input",
    label: "Full name",
    idHelper: "my-helper-name-text",
    helperText: "Please enter your full name",
  },
  {
    id: "secret-input",
    label: "Secret word",
    idHelper: "my-helper-secret-text",
    helperText: "Please enter your secret word for high protection auth",
  },
];

export default function AuthPage() {
  const { isAuth } = useAppSelector((state) => state.auth);
  const [isLoginComp, toggleLoginComp] = useState(true);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch(setAuth(!isAuth));
    navigate("/");
  }
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          minHeight: "95dvh",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ fontSize: "2rem" }}>Sign {isLoginComp ? "in" : "up"}</h1>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            sx={{ borderColor: "#fff" }}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="info" />}
            label="Remember me"
          />
          <Button type="submit" fullWidth variant="contained">
            Submit
          </Button>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            container
          >
            <Grid
              style={{ cursor: "pointer" }}
              onClick={() => toggleLoginComp(!isLoginComp)}
              margin="0.5rem"
              item
            >
              {isLoginComp
                ? "Don't have an account? Sign up"
                : "Already registered? Sign in"}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

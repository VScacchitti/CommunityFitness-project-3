import React, { useEffect, useContext } from 'react'
import Container from "../components/Container"
import Buttons from "../components/Buttons"
import Logo from "../components/Logo"
import { useHistory } from "react-router-dom"
import UserContext from "../context/UserContext"

function Home() {
  const { userData } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (!userData.user) history.push("/login");
  });

  return (
      <Container>
        <Logo />
        <Buttons />
      </Container>
  )
}

export default Home

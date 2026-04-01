import Container from "../components/container";
import Logo from "../assets/images/Logo.svg?react"

export default function Header() {
  return (
      <Container className="mt-3 md:mt-20" as="header">
       <Logo className="md:h-12 h-9"/>
      </Container>

  );
}

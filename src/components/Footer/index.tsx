import { useAuth } from "../../hooks/auth";
import { Container } from "./styles";

const Footer = () => {
  const { associate } = useAuth();

  return (
    <Container>
      <span>
        Usuário: {associate?.name || ""} - Código: {associate?.code || ""}
      </span>
    </Container>
  );
};

export default Footer;

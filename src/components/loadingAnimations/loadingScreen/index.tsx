import { Container } from "./styles";
import GraciosaIcon from "../../../assets/graciosa_big_icon_logo.svg";

const LoadingScreen = () => {
  return (
    <Container>
      <img src={GraciosaIcon} alt="graciosa logo" />
    </Container>
  );
};

export default LoadingScreen;

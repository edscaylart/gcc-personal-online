import { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import GraciosaIcon from "../../assets/graciosa-icon.svg";
import Button from "../Button";
import { Modal, ModalContent } from "../radixModalComponent";
import { useAuth } from "../../hooks/auth";
import {
  MainContainer,
  Container,
  LogoIcon,
  UserContainer,
  LogOutContainer,
} from "./styles";
import { getQuery } from "../../services/hooks/getQuery";
import { useError } from "../../hooks/errors";
import { AiOutlineLogout } from "react-icons/ai";

const DefaultImage =
  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png";

const NavBar = () => {
  const { associate, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { emitError } = useError();
  const [userImage, setUserImage] = useState<any>("");
  const locationName = location.pathname.split("/")[1];

  // const { isLoading: loadingImg } = fetchImage(
  //   currentUser?.profile_picture,
  //   [currentUser],
  //   {
  //     enabled: Boolean(currentUser),
  //     onSuccess: (res) => {
  //       setUserImage(res);
  //     },
  //   }
  // );

  return (
    <>
      <Modal open={open} onOpenChange={() => setOpen(!open)}>
        <ModalContent title="Sair">
          <LogOutContainer>
            <p>Deseja fazer o logout?</p>

            <div className="buttons-container">
              <Button buttonStyle="Text" onClick={() => setOpen(false)}>
                Cancelar
              </Button>
              <Button buttonStyle="Primary" onClick={() => signOut()}>
                LogOut
              </Button>
            </div>
          </LogOutContainer>
        </ModalContent>
      </Modal>
      <MainContainer>
        <Container>
          <Link to="/">
            <LogoIcon src={GraciosaIcon} />
          </Link>

          <UserContainer>
            <div className="user-information">
              <img src={userImage || DefaultImage} alt="personal-image" />

              <span>{associate?.name}</span>
            </div>

            <Button buttonStyle="Text" onClick={() => setOpen(true)}>
              Logout
              <AiOutlineLogout fontSize={30} />
            </Button>
          </UserContainer>
        </Container>
      </MainContainer>
    </>
  );
};

export default NavBar;

import React, { useContext } from "react";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import GraciosaLogo from "../../assets/graciosa-icon.svg";
import Button from "../../components/Button";
import Input from "../../components/formComponents/input";
import { Container, LoginContainer } from "./styles";
import { useError } from "../../hooks/errors";
import { AuthContext } from "../../hooks/auth";
import LoadingScreen from "../../components/loadingAnimations/loadingScreen";

interface FormInputs {
  enrollment: string;
  password: string;
}

const schema = Yup.object().shape({
  enrollment: Yup.string().required("A matrícula é obrigatória"),
  password: Yup.string().required("A senha é obrigatória"),
});

const LoginPage = () => {
  const { signIn, loading } = useContext(AuthContext);
  const { emitError } = useError();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    try {
      signIn(data.enrollment, data.password);
    } catch (error: any) {
      emitError(error, "Falha ao realizar login");
    }
  };

  return (
    <Container>
      {loading && <LoadingScreen />}

      <LoginContainer>
        <div className="header">
          <img src={GraciosaLogo} alt="Graciosa Country Club Logo" />

          <div className="header-title">
            <h4>GCC - Personal ONLINE</h4>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Código"
            affix={{
              prefix: <AiOutlineUser />,
            }}
            register={{ ...register("enrollment") }}
            error={errors?.enrollment?.message}
          />
          <Input
            label="Senha"
            type="password"
            placeholder="●●●●●●"
            affix={{
              prefix: <AiOutlineLock />,
            }}
            register={{ ...register("password") }}
            error={errors?.password?.message}
          />
          <Button buttonStyle="Primary" type="submit">
            Login
          </Button>
        </form>
      </LoginContainer>
    </Container>
  );
};

export default LoginPage;

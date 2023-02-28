import { useEffect, useState } from "react";
import { GoCheck } from "react-icons/go";
import { CSSProperties } from "styled-components";
import { Container, CheckboxRoot, CheckboxIndication } from "./styles";

interface InputProps {
  label?: string;
  name?: string;
  id: string;
  disabled?: boolean;
  error?: string;
  register?: any;
  maxWidth?: number;
  checked?: boolean;
  onCheckedChange?(value: boolean): void;
  readonly?: boolean;
  style?: CSSProperties | undefined;
}

const CheckBoxComponent = ({
  label = "",
  error,
  id,
  maxWidth,
  checked = false,
  onCheckedChange,
  readonly,
  style,
}: InputProps) => {
  const [reloadBox, setReloadBox] = useState(false);

  useEffect(() => {
    setReloadBox(true);

    setTimeout(() => {
      setReloadBox(false);
    }, 10);
  }, [checked]);

  return (
    <Container
      style={style}
      maxWidth={maxWidth || Math.ceil(label?.length * 17)}
      readonly={readonly}
    >
      {label && <label htmlFor={id}>{label} </label>}
      {!reloadBox && !readonly ? (
        <CheckboxRoot
          id={id}
          defaultChecked={checked}
          onCheckedChange={onCheckedChange}
        >
          <CheckboxIndication>
            <GoCheck />
          </CheckboxIndication>
        </CheckboxRoot>
      ) : null}
      {error && <p>{error}</p>}
    </Container>
  );
};

export default CheckBoxComponent;

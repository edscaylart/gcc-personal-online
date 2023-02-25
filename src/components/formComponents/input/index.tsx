import { InputHTMLAttributes, useRef, useState, useEffect } from "react";
import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineLoading,
  AiOutlineToTop,
} from "react-icons/ai";
import { CSSProperties } from "styled-components";
import { Container, InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  disabled?: boolean;
  affix?: {
    prefix?: any;
    suffix?: any;
  };
  error?: string;
  subLabel?: string;
  register?: any;
  inputSize?: "Large" | "Medium" | "Small";
  maxWidth?: number;
  minWidth?: number;
  required?: boolean;
  isLoading?: boolean;
  style?: CSSProperties | undefined;
  inputStyle?: CSSProperties | undefined;
  onReqBlur?(data: any): void;
  urlToReq?: string;
  reqSearchEvents?: Array<object>;
  fieldToReq?: string;
  fieldToReqType?: string;
  onError?(): void;
}

const InputComponent = ({
  label,
  type,
  register,
  affix,
  error,
  subLabel,
  inputSize = "Medium",
  disabled,
  maxWidth,
  minWidth,
  required,
  isLoading,
  style,
  inputStyle,
  onReqBlur,
  urlToReq,
  reqSearchEvents = [],
  fieldToReq = "code",
  fieldToReqType = "number",
  onError,
  ...props
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [seePass, setSeePass] = useState(false);
  const [loadingReq, setLoadingReq] = useState(false);

  return (
    <Container
      className={props?.className}
      required={required}
      maxWidth={maxWidth}
      minWidth={minWidth}
      style={{ ...style }}
    >
      <label htmlFor={props.id || props.name} className="input-label">
        {label}
      </label>
      <InputContainer
        size={inputSize}
        affix={affix}
        disabled={disabled}
        error={error}
        passwordType={type === "password"}
        ref={inputRef}
      >
        {affix?.prefix && (
          <div className="prefix-container">{affix?.prefix}</div>
        )}

        {type === "file" && (
          <label htmlFor={props.id || props.name} className="input-file">
            {props.placeholder || label}
          </label>
        )}

        <input
          ref={inputRef}
          type={!seePass ? type : "text"}
          id={props.id || props.name}
          className="gcb-general-input"
          placeholder={props.placeholder || label}
          style={type === "file" ? { display: "none" } : inputStyle}
          tabIndex={disabled && -1}
          {...register}
          {...props}
        />
        {type === "file" && (
          <div className="sufix-container">
            <label htmlFor={props.id || props.name} className="upload-icon">
              <AiOutlineToTop />
            </label>
          </div>
        )}
        {(affix?.suffix || isLoading || loadingReq) && (
          <div className="sufix-container">
            {affix?.suffix}
            {(isLoading || loadingReq) && (
              <AiOutlineLoading className="loading-icon-bar" />
            )}
          </div>
        )}

        {type === "password" && (
          <button
            type="button"
            className="see-pass-btn"
            onClick={() => setSeePass(!seePass)}
          >
            {!seePass ? (
              <AiOutlineEyeInvisible />
            ) : (
              <AiOutlineEye style={{ fill: "#5392CA" }} />
            )}
          </button>
        )}
      </InputContainer>
      {error && <p className="error-message">{error}</p>}
      {subLabel && <p className="sub-label-message">{subLabel}</p>}
    </Container>
  );
};

export default InputComponent;

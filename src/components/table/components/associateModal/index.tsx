import { useForm } from "react-hook-form";
import Button from "../../../Button";
import * as Yup from "yup";
import DateIndicator from "../../../dateIndicator";
import CheckBoxComponent from "../../../formComponents/checkbox";
import { CloseClassContainer, Container } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutationQuery } from "../../../../services/hooks/useMutationQuery";
import { useError } from "../../../../hooks/errors";
import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { Modal, ModalContent } from "../../../radixModalComponent";
import { getQuery } from "../../../../services/hooks/getQuery";
import {
  AiOutlineCheckCircle,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import { innerClass } from "../../../../models/class";

interface modalProp {
  data: innerClass;
  onClose(): void;
  refetch(): void;
  hasCurrentLesson: any;
}

interface modalInput {
  associates: number[];
}

const schema = Yup.object().shape({
  associates: Yup.array()
    .min(1, "Selecione ao Menos um Sócio")
    .required("Selecione ao Menos um Sócio"),
});

const classStates = {
  ["EM ABERTO"]: "open",
  ["AULA ENCERRADA"]: "closed",
};

const AssociateModal = ({
  data,
  onClose,
  refetch,
  hasCurrentLesson,
}: modalProp) => {
  const { emitError: onError } = useError();
  const [open, setOpen] = useState(false);
  const [classOpened, setClassOpened] = useState(false);
  const [dataSource, setDataSource] = useState<innerClass>();
  const [loading, setLoading] = useState(true);

  getQuery(`personal/web/available-classes/${data.code}`, [data.code], {
    onSuccess: (res) => {
      setDataSource({ ...data, ...res });
      setLoading(false);
    },
    onError,
  });

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<modalInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      associates: [],
    },
  });

  const { mutate: onOpenClass, isLoading } = useMutationQuery(
    `/personal/web/available-classes/${data?.code}/open-lesson`
  );

  const onSubmitOpenClass = (data: modalInput) => {
    onOpenClass(
      {
        associate_code: data?.associates,
      },
      {
        onSuccess: () => {
          toast.success("Aula Aberta");
          setClassOpened(true);
        },
        onError,
      }
    );
  };

  return (
    <>
      <Modal open={open} onOpenChange={() => setOpen(!open)}>
        <ModalContent title="">
          <CloseClassModal
            onClose={() => setOpen(false)}
            refetch={() => {
              refetch();
              setTimeout(() => {
                onClose();
              }, 800);
            }}
            data={{ ...dataSource, associates: watch("associates") }}
          />
        </ModalContent>
      </Modal>
      <Container>
        <header>
          {data.status && (
            <p className={`class-state ${classStates[data?.status]}`}>
              {data?.status}
            </p>
          )}
          <p>Turma: {data?.code}</p>
          <p>Descrição: {data?.description}</p>
          <p>
            Data: <DateIndicator date={data?.open_at} />
          </p>
        </header>

        {errors.associates?.message && (
          <p className="error-message">{errors.associates?.message}</p>
        )}

        <ul className="associates-list">
          {loading ? (
            <AiOutlineLoading3Quarters />
          ) : (
            dataSource?.students?.map((e, i: number) => (
              <li key={i}>
                <CheckBoxComponent
                  id={"associate" + i}
                  maxWidth={30}
                  onCheckedChange={(value) => {
                    const associates = watch("associates");
                    if (value) {
                      setValue(
                        "associates",
                        [...associates, e.associate_code],
                        {
                          shouldValidate: true,
                        }
                      );
                    } else {
                      const filterList = associates.filter(
                        (filter: any) => filter !== e.associate_code
                      );
                      setValue("associates", filterList);
                    }
                  }}
                />
                <label htmlFor={"associate" + i}>
                  {e.associate_code} - {e.name}
                </label>
              </li>
            ))
          )}
        </ul>

        {(hasCurrentLesson && hasCurrentLesson === data.code) ||
        !hasCurrentLesson ? (
          <div className="buttons-container">
            {data.class_taken || classOpened ? (
              <Button
                buttonStyle="Primary"
                onClick={() => setOpen(true)}
                loading={isLoading}
              >
                Fechar Aula
              </Button>
            ) : (
              <Button
                buttonStyle="Primary"
                onClick={handleSubmit(onSubmitOpenClass)}
                loading={isLoading}
              >
                Abrir Aulas
              </Button>
            )}
          </div>
        ) : (
          <div className="buttons-container">
            <p className="error-message">
              Não é possível abrir esta aula, pois já existe uma em aberto.
            </p>
          </div>
        )}
      </Container>
    </>
  );
};

interface classCloseModalProps {
  onClose(): void;
  data?: any;
  refetch(): void;
}

type modalState = "payment" | "split" | "done";
type paymentC = {
  canSplitCharge: boolean;
  associates: {
    associate_code: number;
    name: string;
  }[];
};

interface closureInputs {
  split: boolean;
  lesson_code: number;
  payment_plan_code: 1 | 2;
  associate_code_to_charge: number | null | undefined;
}

const CloseClassModal = ({ onClose, data, refetch }: classCloseModalProps) => {
  const { emitError: onError } = useError();
  const [states, setState] = useState<modalState>("payment");
  const [paymentCondition, setPaymentCondition] = useState<paymentC>();

  const { handleSubmit, setValue, watch, getValues } = useForm<closureInputs>();

  useEffect(() => {
    setValue("lesson_code", data.code);
  }, []);

  getQuery(
    `personal/web/available-classes/${data?.code}/charge-conditions/`,
    [data?.code, "charge-condition"],
    {
      onSuccess: (res) => {
        console.log(res);
        setPaymentCondition(res);
      },
      onError,
    }
  );

  const { mutate: closeClass, isLoading } = useMutationQuery(
    `/personal/web/available-classes/${data?.code}/close-lesson`
  );

  const onCloseClass = (
    value: 1 | 2,
    split = false,
    associate_code: number | null = null
  ) => {
    setValue("payment_plan_code", value);
    setValue("split", split);
    setValue("associate_code_to_charge", associate_code);

    if (paymentCondition?.canSplitCharge && states === "split") {
      setState("split");
      return;
    }

    if (!associate_code && !split) {
      setValue(
        "associate_code_to_charge",
        paymentCondition?.associates?.[0]?.associate_code
      );
    }

    const req = getValues();

    closeClass(req, {
      onSuccess: () => {
        toast.success("Aula Fechada");
        setState("done");
        refetch();
      },
      onError,
    });
  };

  const modalStates = useMemo(
    () => ({
      payment: (
        <>
          <h6 className="title">Como deseja faturar esta aula?</h6>

          <div className="buttons-container">
            <Button
              buttonStyle="Primary"
              onClick={() => onCloseClass(1)}
              loading={isLoading}
            >
              Cartão Graciosa
            </Button>

            <Button
              buttonStyle="Primary"
              onClick={() => onCloseClass(2)}
              loading={isLoading}
            >
              Dinheiro
            </Button>
            <Button buttonStyle="Secondary" onClick={onClose}>
              Cancelar
            </Button>
          </div>
        </>
      ),
      split: (
        <>
          <h6 className="split-title title">
            Esta é uma aula dupla, para continuar selecione aluno para qual a
            aula deve ser faturada?
          </h6>

          <ul className="students-list">
            <li>
              <p>Alunos:</p>
            </li>
            {paymentCondition?.associates?.map((e, i: number) => (
              <li key={i}>
                <p>
                  {e.associate_code} - {e.name}
                </p>
              </li>
            ))}
          </ul>

          <div className="buttons-container">
            {paymentCondition?.associates?.map((e, i: number) => (
              <>
                <Button
                  buttonStyle="Primary"
                  onClick={() =>
                    onCloseClass(
                      watch("payment_plan_code"),
                      false,
                      e?.associate_code
                    )
                  }
                >
                  {e.associate_code}
                </Button>
              </>
            ))}

            <Button
              buttonStyle="Primary"
              onClick={() => onCloseClass(watch("payment_plan_code"), true)}
            >
              Dividir Fatura
            </Button>
            <Button buttonStyle="Secondary" onClick={onClose}>
              Cancelar
            </Button>
          </div>
        </>
      ),
      done: (
        <>
          <div className="done-icon">
            <AiOutlineCheckCircle fontSize={72} />
          </div>

          <h6 className="title">Cartão Graciosa</h6>

          <p>Aula Faturada no Cartão Graciosa</p>
        </>
      ),
    }),
    [states, data, paymentCondition, isLoading]
  );

  return <CloseClassContainer>{modalStates[states]}</CloseClassContainer>;
};

export default AssociateModal;

import { useState } from "react";
import { AiOutlineRedo, AiOutlineSync } from "react-icons/ai";
import { useError } from "../../hooks/errors";
import { classType } from "../../models/class";
import { getQuery } from "../../services/hooks/getQuery";
import Button from "../Button";
import { Modal, ModalContent } from "../radixModalComponent";
import AssociateModal from "./components/associateModal";
import { Container, TableList } from "./styles";

// type filterType = "all" | "end" | "on";

const classStates = {
  ["EM ABERTO"]: "open",
  ["AULA ENCERRADA"]: "closed",
};

const Table = () => {
  // const [filterState, setFiterState] = useState<filterType>("all");
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState<any>();
  const [dataSource, setDataSource] = useState<classType[]>([]);
  const [hasOcurringLesson, setHasOcurringLesson] = useState<number | null>();
  const { emitError: onError } = useError();

  const { refetch, isFetching } = getQuery(
    "personal/web/available-classes",
    ["avaiable-classes"],
    {
      onSuccess: (data: classType[]) => {
        setDataSource(data);

        const getOcurringLesson: classType | any = data.filter(
          (e) => e.status === "EM ABERTO"
        );
        setHasOcurringLesson(getOcurringLesson?.[0]?.code || null);
      },
      onError,
      refetchInterval: 60000,
    }
  );

  const handleOpenModal = (data: any) => {
    setModalData(data);
    setOpen(true);
  };

  // const handleChangeFilter = (value: filterType) => {
  //   setFiterState(value);
  // };

  return (
    <>
      <Modal open={open} onOpenChange={() => setOpen(!open)}>
        <ModalContent title={modalData?.code + " - " + modalData?.description}>
          <AssociateModal
            data={modalData}
            onClose={() => setOpen(false)}
            hasCurrentLesson={hasOcurringLesson}
            refetch={refetch}
          />
        </ModalContent>
      </Modal>
      <Container>
        <section className="list-header">
          {/* <div className="filter">
          <Button
          buttonStyle={filterState === "all" ? "Primary" : "Text"}
          onClick={() => handleChangeFilter("all")}
          >
            Todos
            </Button>
          <Button
          buttonStyle={filterState === "end" ? "Primary" : "Text"}
          onClick={() => handleChangeFilter("end")}
          >
            Encerrados
            </Button>
          <Button
          buttonStyle={filterState === "on" ? "Primary" : "Text"}
            onClick={() => handleChangeFilter("on")}
          >
            Em Aberto
            </Button>
          </div> */}

          <Button buttonStyle="Text" onClick={refetch} loading={isFetching}>
            Refresh <AiOutlineSync />
          </Button>

          <p className="counter">
            Exibindo {dataSource.length.toString().padStart(2, "0")} Resultados
          </p>
        </section>
        <TableList>
          {dataSource.map((e, i) => (
            <li key={i}>
              <Button
                buttonStyle="Text"
                className={`list-btn ${e.status && classStates[e?.status]}`}
                onClick={() => handleOpenModal(e)}
              >
                <h4>{e?.code}</h4>
                <h4>{e?.description}</h4>
              </Button>
            </li>
          ))}
        </TableList>

        {/* <ul className="table-description">
        <li>
        <div className="open" />
        <p>Em Aberto</p>
        </li>
        <li>
        <div className="ended" />
        <p>Encerrados</p>
        </li>
        <li>
        <div className="normal" />
        <p>Normais</p>
        </li>
      </ul> */}
      </Container>
    </>
  );
};

export default Table;

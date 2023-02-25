import { ReactElement } from "react";
import {
  AiOutlineUser,
  AiOutlineKey,
  AiOutlineCalculator,
  AiOutlineShop,
  AiOutlineExport,
  AiOutlineCoffee,
  AiOutlineCalendar,
  AiOutlineTeam,
  AiOutlineFlag,
  AiOutlineRead,
  AiOutlineException,
  AiOutlineContainer,
  AiOutlineMobile,
  AiOutlineSetting,
} from "react-icons/ai";
import { BiDumbbell } from "react-icons/bi";
import { MdSportsGolf } from "react-icons/md";
import AddNewAgent from "../../page/moduleConcierge/pages/agents/components/addNewAgent";
import BlockAssociateModal from "../../page/moduleDebt/additionalFunctions/Agents/block";
import AutomaticBlockAssociateModal from "../../page/moduleDebt/additionalFunctions/Agents/automaticBlock";
import TemporaryCredit from "../../page/moduleDebt/additionalFunctions/Agents/temporaryCredit";
import AddNewDebtType from "../../page/moduleDebt/additionalFunctions/Register/AddNewDebtType";
import AddNewReceipt from "../../page/moduleDebt/additionalFunctions/Register/addNewReceive";
import AddNewClosureType from "../../page/moduleDebt/additionalFunctions/Register/closureType";
import AddNewPaymentPlan from "../../page/moduleDebt/additionalFunctions/Register/paymentPlan";
import AddReversalRelease from "../../page/moduleDebt/additionalFunctions/Register/reversalRealease";
import AddNewSubdivisionParam from "../../page/moduleDebt/additionalFunctions/Register/subdivisionParams";
import AddNewProduct from "../../page/moduleDebt/pages/productsAndServices/addNewProduct";
import AddNewService from "../../page/moduleDebt/pages/productsAndServices/addNewService";
import AddNewAutoMobile from "../associateActions/addNewAutoMobile/addNewVehicleForm";
import AddNewPicturePopUp from "../associateActions/addNewPicturePopUp";
import ChangePassword from "../changePassword";
import AddNewGuestPopUp from "../guestsActions/addNewGuest";
import AddNewClube from "../partnerComponent/components/addNewClube";
import AddNewConvenedAssociate from "../partnerComponent/components/addNewConvenedAssociate";
import ControlOfImproper from "../../page/moduleDebt/additionalFunctions/Debt/controlOfImproperDevolution";
import RealeaseChargeShortCut from "../../page/moduleDebt/additionalFunctions/monthlyClosure/exrtactGeneration/realeaseCharge";
import SendExtractAndTicket from "../../page/moduleDebt/additionalFunctions/monthlyClosure/ticketExtract";
import SingleCharge from "../../page/moduleDebt/pages/charges/sideActions/singleCharge";
import ReversalAllotment from "../../page/moduleDebt/additionalFunctions/monthlyClosure/reversalAllotment";
import SubDivisionPanel from "../../page/moduleDebt/additionalFunctions/SubDivision/subdivisionControlPanel";
import ChequeControl from "../../page/moduleDebt/additionalFunctions/SubDivision/chequeControlPanel";
import SubdivisionCheque from "../../page/moduleDebt/additionalFunctions/SubDivision/subdivisionChqeue";
import ChargeLevel from "../../page/moduleDebt/additionalFunctions/ChargeLetter/chargeLevel";
import ChargeLetter from "../../page/moduleDebt/additionalFunctions/ChargeLetter/chargeLetter";
import LetterEmission from "../../page/moduleDebt/additionalFunctions/ChargeLetter/letterEmission";
import AutomaticLetterEmission from "../../page/moduleDebt/additionalFunctions/ChargeLetter/autoLetterEmission";
import RegularizationType from "../../page/moduleDebt/additionalFunctions/Regularization/regularizationType";
import RegularizationParam from "../../page/moduleDebt/additionalFunctions/Regularization/regularizationParam";
import Regularization from "../../page/moduleDebt/additionalFunctions/Regularization/regularization";
import RegularizationPanel from "../../page/moduleDebt/additionalFunctions/Regularization/regularizationPanel";
import Banks from "../../page/moduleDebt/additionalFunctions/BankIntegration/banks";
import Agency from "../../page/moduleDebt/additionalFunctions/BankIntegration/agency";
import CheckingAccount from "../../page/moduleDebt/additionalFunctions/BankIntegration/checkingAccount";
import Ticket from "../../page/moduleDebt/additionalFunctions/BankIntegration/Ticket";
import Holder from "../../page/moduleDebt/additionalFunctions/BankIntegration/holder";
import TicketPanel from "../../page/moduleDebt/additionalFunctions/BankIntegration/ticketPanel";
import CNRPanel from "../../page/moduleDebt/additionalFunctions/BankIntegration/CNRPanel";
import SubDivisionLetterPanel from "../../page/moduleDebt/additionalFunctions/ChargeLetter/chargePanel";
import {
  AddBook,
  AddNewDefault,
} from "../../page/moduleLibrary/pages/bookSearch/components/addNew";
import AddNewLoan from "../../page/moduleLoan/pages/loanControl/components/addNew";
import { ReturnModal } from "../../page/moduleLoan/pages/loanControl/components/devolution";
import AddNewLocation from "../globalModals/addNewLocation";
import AddNewCounty from "../globalModals/addNewConty";
import AddNewState from "../globalModals/addNewState";
import AddNewCountry from "../globalModals/addNewCountry";
import AddNewHoliday from "../globalModals/addNewHoliday";
import AddNewWaiter from "../globalModals/addNewWaiter";
import AddNewTable from "../../page/moduleBar/additionalFunctions/table";
import AddNewDoctor from "../../page/moduleScheduling/pages/doctorPage/newDoctor";
import AddNewSituation from "../../page/moduleScheduling/pages/situationPage/newSituation";
import AddNewOcurrence from "../../page/moduleScheduling/pages/ocurrencePage/newOcurrence";
import AppointmentAddNewDefault from "../../page/moduleScheduling/additionalFunctions/penalty";
import AssociateTable from "../associateActions/associateTable";
import AddNewSchedule from "../../page/moduleScheduling/additionalFunctions/addNewSchedule";
import AddNewApoitment from "../../page/moduleScheduling/pages/appointmentPage/newAppointment";
import NewReservation from "../../page/moduleLibrary/pages/booking/components/addNew";
import NewBookLoan from "../../page/moduleLibrary/pages/loan/components/addNew";
import AddNewAssociate from "../associateActions/addNew";
import NewGolfer from "../../page/moduleGolf/pages/golfer/components/addNew";
import AddNewCaddie from "../../page/moduleGolf/pages/caddies/components/addNew";
import AddNewActivitie from "../../page/moduleClass/pages/activities/addNew";
import { OnAddNewEquipmentType } from "../../page/moduleGolf/pages/registerEquipment/components/addNewEquipmentType";
import AddNewEquipment from "../../page/moduleGolf/pages/registerEquipment/components/addNewEquipment";
import AddNewBag from "../../page/moduleGolf/pages/registerEquipment/components/addNewBag";
import AddNewCart from "../../page/moduleGolf/pages/registerEquipment/components/addNewCart";
import AddNewBrand from "../../page/moduleGolf/pages/registerEquipment/components/addNewBrand";
import NewElectionType from "../../page/moduleElections/pages/electionType/addNew";
import AddNewCandidateType from "../../page/moduleElections/pages/candidateType/addNew";
import AddNewColiation from "../../page/moduleElections/pages/coalition/addNew";
import AddNewParty from "../../page/moduleElections/pages/party/addNew";
import AddNewBallotBox from "../../page/moduleElections/pages/ballotBox/addNew";
import AddNewCPTeacher from "../../page/moduleCP/additionalFunctions/addNewTeacher";
import AddNewEquipmentCP from "../../page/moduleCP/additionalFunctions/addNewEquipment";
import AddNewExerciseCP from "../../page/moduleCP/additionalFunctions/addNewExercise";
import AddNewEncounter from "../../page/moduleCP/pages/encounters/addNew";
import NewReportCategorie from "../../page/moduleReports/pages/categories/components/addNew";
import AddNewReport from "../../page/moduleReports/pages/reports/components/addNew";
import AssociatesActivitiesModal from "../../page/moduleAssociate/additionalFunctions/associateActivities";
import AddNewInstructor from "../../page/moduleClass/pages/Instructor/addNew";
import ActivitieType from "../../page/moduleClass/additionalFunctions/classActivitieType";
import ClassClassification from "../../page/moduleClass/additionalFunctions/classClassification";
import AddNewClass from "../../page/moduleClass/pages/classes/addNew";
import AddNewWaitList from "../../page/moduleClass/additionalFunctions/waitingList";
import StudentModal from "../../page/moduleClass/pages/student/popUpStudent";
import AddNewLesson from "../../page/moduleClass/additionalFunctions/lesson";
import ClassFrequencyModal from "../../page/moduleClass/additionalFunctions/frequency";
import AddNewBusiness from "../../page/moduleAdmin/pages/business/components/addNewBusiness";
import AddNewOrganization from "../../page/moduleAdmin/pages/business/components/addNewOrganization";
import AdminDepartament from "../../page/moduleAdmin/additionalFunctions/departaments";
import AdminApprovalUserProfile from "../../page/moduleAdmin/additionalFunctions/approvalUserProfile";
import AddNewUserGroup from "../../page/moduleAdmin/pages/users/components/addNewGroup";
import AddNewAdminUser from "../../page/moduleAdmin/pages/users/components/addNewAdminUser";
import AddNewEvent from "../../page/moduleAssociate/pages/Events/components/addNew/event";
import UserPermissions from "../../page/moduleAdmin/additionalFunctions/userPermission";
import { localColumns } from "../../page/moduleAssociate/pages/Events/components/advancedSearch/schedule";
import AssociateCategories from "../../page/moduleAssociate/additionalFunctions/categories";
import DependentTypeTransfer from "../../page/moduleAssociate/additionalFunctions/categoriesTransfer";
import CashierClosureReport from "../../page/modulePDV/additionalFunctions/cashierClosureReport";
import ProductsListFromPriceTableReport from "../../page/modulePDV/additionalFunctions/productListReport";
import SellItensReport from "../../page/modulePDV/additionalFunctions/sellItensReport";
import ComsumptionTicket from "../../page/modulePDV/additionalFunctions/comsumptionTicket";
import RePrintTicket from "../../page/modulePDV/additionalFunctions/rePrintTicket";

type NavType = {
  title: string;
  icon: ReactElement;
  sistemShortcuts?: {
    title: string;
    options: {
      field: string;
      permission?: string[];
      action?: {
        title?: string;
        element?: ReactElement;
        link?: boolean;
        url?: string;
      };
    }[];
  }[];
};

const defaultShortCut = [
  {
    title: "Ferramentas",
    options: [
      // {
      //   //buscar licença, gerenciar conexões e imprimir
      //   field: "Importar Licença de Uso",
      // },
      // {
      //   //Tabela com conexões ativas - agrupada por código de filial e módulo
      //   //Funções: Derrubar conexão, marcar todas, desmarcar todas, refetch e limpar conexões
      //   //Ver no M2V
      //   field: "Visualizar Conexões Ativas",
      // },
      {
        //Alterar senha do User
        //Fields: senha atual, nova senha e confirmar nova senha
        //Criar PopUp
        field: "Trocar Senha",
        action: {
          title: "Trocar Senha",
          element: <ChangePassword />,
        },
      },
    ],
  },
  // {
  //   title: "Ajuda",
  //   options: [
  //     {
  //       //informações sobre a portaria
  //       field: "Sobre",
  //     },
  //     // {
  //     //   //Botão não fez nada
  //     //   field: "Ajuda",
  //     // },
  //     // {
  //     //   //copyright
  //     //   field: "Copyright",
  //     // },
  //   ],
  // },
];

export const AssociateNav: NavType = {
  title: "Associados",
  icon: <AiOutlineUser />,
  sistemShortcuts: [
    {
      title: "Cadastrar",
      options: [
        {
          field: "Atividades",
          permission: ["associate.activities.add"],
          action: {
            title: "Nova Atividade",
            element: <AddNewActivitie />,
          },
        },
        {
          // Cadastro de departamento
          field: "Departamentos",
          action: {
            title: "Departamentos",
            element: <AdminDepartament />,
          },
        },
        // {
        //   // Cadastro de estado civil
        //   field: "Estado Civil",
        // },
        // {
        //   // Cadastro de expediêntes
        //   field: "Expediêntes",
        // },
        // {
        //   // Cadastro de motivos
        //   field: "Motivos de transfêrencia de sócios",  ** PRECISA SER DEV **
        // },
        // {
        //   // Cadastro de narrativas
        //   field: "Narrativa",
        // },
        // {
        //   // Cadastro de observações
        //   field: "Observações",
        // },
        {
          // Cadastro de penalidade
          field: "Penalidades",
          action: {
            title: "Penalidade",
            element: (
              <AppointmentAddNewDefault
                url="/appointment/penalty"
                messages={{
                  onAddMessage: "Penalidade Adicionada!",
                  onEditMessage: "Penalidade Alterada com Sucesso!",
                }}
                searchModal={{
                  modalTitle: "Penalidades",
                  queryParams: {
                    actions: ["penalty"],
                    url: "appointment/penalty",
                  },
                }}
              />
            ),
          },
        },
        // {
        //   // Cadastro de débito
        //   field: "Tipos de Débitos", ** PRECISA SER DEV **
        // },
      ],
    },
    {
      title: "Associados",
      options: [
        {
          // cadastro de sócios
          field: "Sócios",
          permission: ["associate.associate.add"],

          action: {
            title: "Novo Sócio",
            element: <AddNewAssociate />,
          },
        },
        {
          field: "Categorias",
          action: {
            title: "Categorias",
            element: <AssociateCategories />,
          },
        },
        {
          field: "Tipos de Dependentes",
          action: {
            title: "Tipo de Dependentes",
            element: (
              <AddNewDefault
                url="associate/dependentType"
                successMessage="Tipo de Dependente Adicionado!"
                hasObservations
                hasEnabled
                searchModal={{
                  columns: localColumns,
                  modalTitle: "Tipos de Dependentes",
                  queryParams: {
                    actions: ["dependentType"],
                    url: "associate/dependentType",
                  },
                }}
              />
            ),
          },
        },
        {
          field: "Bloqueio de Sócios",
          action: {
            link: true,
            url: "associados/bloqueio-de-socios",
          },
        },
        {
          field: "Créditos para sócios temporários",
          action: {
            link: true,
            url: "associados/credito-temporario",
          },
        },
        {
          field: "Foto dos Sócios",
          action: {
            title: "Cadastro de Foto",
            element: <AddNewPicturePopUp />,
          },
        },
        // {
        //   // digitais dos sócios
        //   field: "Digitais dos Sócios",
        // },
        // {
        //   // lista de carteirinhas a serem impressas
        //   field: "Impressão de Carteirinhas",
        // },
        // {
        //   // lista de etiquetas a serem impressas
        //   field: "Impressão de Etiquetas",
        // },
        // {
        //   // lançamento de cobranças
        //   field: "Cobrança Avulsa / Recibo", ** PRECISA SER DEV **
        // },
        // {
        //   // Cadastro de ações
        //   field: "Ações", ** PRECISA SER DEV **
        // },
        // {
        //   // Mostra ações em posse do clube
        //   field: "Ações em Posse do Clube", ** PRECISA SER DEV **
        // },
        {
          // Converte categoria de dependente eu acho
          field: "Conversão de Categoria de Dependente",
          action: {
            title: "Conversão de Categoria de Dependente",
            element: <DependentTypeTransfer />,
          },
        },
        // {
        //   // Transfere ações
        //   field: "Transferência de Ações", ** PRECISA SER DEV **
        // },
        // {
        //   // Configura a senha de um sócio, como a que tem no perfil deles
        //   field: "Configurações de Senhas",
        // },
        // {
        //   // acho que envia senha pro Sócio
        //   field: "Wizard de Envio de Senhas",
        // },
        // {
        //   // Cadastro de categoria de marketing
        //   field: "Categorias de Marketing",
        // },
      ],
    },
    // {
    //   title: "Web",
    //   options: [
    //     {
    //       // Lista de aprovação de Cadastro Web
    //       field: "Aprovação de Cadastros Pendentes de Sócios (Web)",
    //     },
    //     {
    //       // Lista de aviso para os sócios
    //       field: "Avisos para os Sócios (Web)",
    //     },
    //   ],
    // },
    {
      title: "Painel de Controle",
      options: [
        {
          field: "Painel de Busca de Associados",
          action: {
            link: true,
            url: "associados/socio",
          },
        },
        // {
        //   field: "Painel de Controle de Associados",
        // },
        {
          field: "Painel Pesquisa Acessos",
          action: {
            link: true,
            url: "associados/pesquisa-de-acesso",
          },
        },
        // {
        //   //biometrias
        //   field: "Painel de Log de Biometrias",
        // },
      ],
    },
    {
      title: "Clubes conveniados",
      options: [
        {
          //Cadastro de clubes conveniados
          field: "Clubes conveniados",
          action: {
            link: true,
            url: "associados/convenios",
          },
        },
        {
          //Cadastro de sócios de Clubes conveniados
          field: "Sócios de Clubes conveniados",
          action: {
            link: true,
            url: "associados/convenios",
          },
        },
      ],
    },
    // {
    //   title: "Cartas Cobrança",
    //   options: [
    //     {
    //       //Cadastro
    //       field: "Níveis de Cobrança",
    //     },
    //     {
    //       //Cadastro
    //       field: "Cartas de Cobrança",
    //     },
    //     {
    //       //Wizard emissão, sei lá, deve emitir
    //       field: "Emissão de Carta de Cobrança",
    //     },
    //     {
    //       //Da pra ver as cartas e filtrar tipo sócio, sepa é sócio
    //       field: "Painel de Controle de Cartas de Cobrança",
    //     },
    //   ],
    // },
    // {
    //   title: "Venda",
    //   options: [
    //     {
    //       //Cadastro
    //       field: "Tipos de Venda (Ação e Taxa de Ingresso)", ** PRECISA SER DEV **
    //     },
    //     {
    //       //Cadastro
    //       field: "Tipo de Ação", ** PRECISA SER DEV **
    //     },
    //     {
    //       //Visualizar paramêtros
    //       field: "Parametros para Venda de Ação", ** PRECISA SER DEV **
    //     },
    //     {
    //       //Vender ações
    //       field: "Venda de Ações", ** PRECISA SER DEV **
    //     },
    //     {
    //       //Controle de venda de ações, da pra pesquisa tipo sócio
    //       field: "Painel de Controle de Venda de Ações",
    //     },
    //     {
    //       //Ver Parâmetros de taxa
    //       field: "Parâmetros para Taxa de Ingresso",
    //     },
    //     {
    //       //Vender tipo as ações
    //       field: "Venda de Taxa de Ingresso",
    //     },
    //     {
    //       //Painel, tem filtro tipo sócios
    //       field: "Painel de controle de Venda de Taxas de Ingresso",
    //     },
    //   ],
    // },
    {
      title: "Eventos",

      options: [
        // {
        //   //Cadastro
        //   field: "Tipos de Convites",
        // },
        {
          //Cadastro
          field: "Tipo de Eventos",
          action: {
            title: "Tipo de Evento",
            element: (
              <AddNewDefault
                url="class/eventType"
                successMessage="Tipo de Evento Adicionado!"
                hasObservations
                hasEnabled
                searchModal={{
                  columns: localColumns,
                  modalTitle: "Tipos de Evento",
                  queryParams: {
                    actions: ["loan-state"],
                    url: "class/eventType",
                  },
                }}
              />
            ),
          },
        },
        {
          //Cadastro
          field: "Locais",
          action: {
            title: "Local",
            element: <AddNewLocation />,
          },
        },
        {
          //Cadastro
          field: "Eventos",
          permission: ["associate.events.add"],
          action: {
            title: "Eventos",
            element: <AddNewEvent />,
          },
        },
      ],
    },
    // {
    //   title: "Localidades",
    //   options: [
    //     {
    //       //Cadastro
    //       field: "Municípios",
    //     },
    //     {
    //       //Cadastro
    //       field: "Estados",
    //     },
    //     {
    //       //Cadastro
    //       field: "Países",
    //     },
    //     {
    //       //Cadastro
    //       field: "Feriados",
    //       action: {
    //         title: "Cadastro de Feriados",
    //         element: <AddNewHoliday />,
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "Configurações",
    //   options: [
    //     {
    //       //Info sobre o banco de dados
    //       field: "Banco de Dados",
    //     },
    //     {
    //       //Muda algumas cores do sistema
    //       field: "Skins",
    //     },
    //   ],
    // },
    ...defaultShortCut,
  ],
};

export const DebtNav: NavType = {
  title: "Débitos",
  icon: <AiOutlineCalculator />,
  sistemShortcuts: [
    {
      title: "Cadastros",
      options: [
        {
          field: "Produtos",
          permission: ["financial.product.add"],
          action: {
            title: "Cadastro de Produtos",
            element: <AddNewProduct />,
          },
        },
        {
          field: "Serviços",
          permission: ["financial.service.add"],
          action: {
            title: "Cadastro de Serviços",
            element: <AddNewService />,
          },
        },
        {
          field: "Tipo de Débito",
          action: {
            title: "Tipo de Débito",
            element: <AddNewDebtType />,
          },
        },
        {
          field: "Tipos de Recebimento",
          action: {
            title: "Tipo de Recebimento",
            element: <AddNewReceipt />,
          },
        },
        {
          field: "Estorno de Lançamentos de Terceiros/Instrutores",
          action: {
            title: "Estorno de Lançamento de Terceiros",
            element: (
              <AddReversalRelease url="financial/financialPost/thirdPartyChargeBack" />
            ),
          },
        },
        {
          field: "Tipos de Fechamentos",
          action: {
            title: "Tipo de Fechamento",
            element: <AddNewClosureType />,
          },
        },
        {
          field: "Parâmetros pra Parcelamento",
          action: {
            title: "Parâmentros de Parecelamento",
            element: <AddNewSubdivisionParam />,
          },
        },
        {
          field: "Condições de Pagamento",
          action: {
            title: "Plano de Pagamento",
            element: <AddNewPaymentPlan />,
          },
        },
      ],
    },
    {
      title: "Agentes",
      options: [
        {
          field: "Painel de Busca de Associados",
          permission: ["financial.associate.view"],
          action: {
            link: true,
            url: "/debitos/socio",
          },
        },
        // {
        //   //Cadastro e pesquisa de Agentes - Página de Agentes
        //   field: "Agentes",
        // },

        {
          field: "Atividades dos Associados",
          action: {
            title: "Atividade dos Associados",
            element: <AssociatesActivitiesModal />,
          },
        },
        {
          field: "Bloqueio de Sócios",
          action: {
            title: "Bloqueio de Sócios",
            element: <BlockAssociateModal />,
          },
        },
        {
          field: "Crédito para Sócios Temporários",
          action: {
            title: "Crédito para Sócios Temporários",
            element: <TemporaryCredit />,
          },
        },
        {
          field: "Bloqueio/Desbloqueio Automático de Agentes",
          action: {
            title: "Bloqueio/ Desbloqueio Automático de Sócios",
            element: <AutomaticBlockAssociateModal />,
          },
        },
      ],
    },
    {
      title: "Financeiro",
      options: [
        {
          field: "Controle de Recebimentos Indevidos e Devoluções de Agentes ",
          action: {
            title: "Controle de Indevidos e Devoluções",
            element: <ControlOfImproper />,
          },
        },
      ],
    },
    {
      title: "Fechamento Mensal",
      options: [
        {
          field: "Painel de Lançamentos",
          action: {
            link: true,
            url: "/debitos/lancamentos",
          },
        },
        {
          field: "Carga de Mensalidades para o Cartão",
          action: {
            link: true,
            url: "/debitos/carga-de-Mensalidade",
          },
        },
        {
          field: "Fechamento Mensal dos Sócios",
          action: {
            link: true,
            url: "/debitos/fechamento-mensal",
          },
        },
        {
          field: "Cobrança",
        },
        {
          field: "Geração dos Extratos dos Sócios (Falta backend)",
          action: {
            title: "Geração do Extrato dos Sócios",
            element: <RealeaseChargeShortCut />,
          },
        },
        {
          field: "Envio de Extratos e Boletos por E-mail",
          action: {
            title: "Envio de Extratos e Boletos para os Sócios",
            element: <SendExtractAndTicket />,
          },
        },
        {
          field: "Painel de Fechamento de Pontos de Venda",
          action: {
            link: true,
            url: "/debitos/fechamento-pdv",
          },
        },
        {
          field: "Painel de Controle de Taxas Administrativas",
          action: {
            link: true,
            url: "/debitos/controles-de-taxas",
          },
        },
        {
          field: "Cobrança Avulsa/Recibo",
          action: {
            title: "Cobrança Avulsa/ Recibo",
            element: <SingleCharge isOpen />,
          },
        },
        {
          field: "Estorno em Lote",
          action: {
            title: "Estorno em Lote",
            element: <ReversalAllotment />,
          },
        },
      ],
    },
    {
      title: "Parcelamento",
      options: [
        {
          field: "Painel de Controle de Parcelamentos",
          action: {
            title: "Painel de Parcelamentos",
            element: <SubDivisionPanel />,
          },
        },
        // {
        //   field: "Painel de Busca de Cheques (Falta backend)",
        //   action: {
        //     title: "Painel de Busca de Cheques",
        //     element: <ChequeControl />,
        //   },
        // },
        // {
        //   field: "Inclusão de Cheques no Parcelamento (Falta backend)",
        //   action: {
        //     title: "Cheque de Parecelamento",
        //     element: <SubdivisionCheque />,
        //   },
        // },
      ],
    },
    {
      title: "Carta de Cobrança",
      options: [
        {
          field: "Níveis da Cobrança",
          action: {
            title: "Nível de Cobrança",
            element: <ChargeLevel />,
          },
        },
        {
          field: "Cartas de Cobrança",
          action: {
            title: "Carta de Cobrança",
            element: <ChargeLetter />,
          },
        },
        {
          field: "Emissão de Carta de Cobrança",
          action: {
            title: "Emissão de Carta de Cobrança",
            element: <LetterEmission />,
          },
        },
        {
          field: "Painel de Controle de Cartas de Cobrança",
          action: {
            title: "Painel de Controle de Cartas de Cobrança",
            element: <SubDivisionLetterPanel />,
          },
        },
        // {
        //   field: "Wizard de Envio Automático de Cartas de Cobrança",
        //   action: {
        //     title: "Envio Automático de Cartas de Cobrança",
        //     element: <AutomaticLetterEmission />,
        //   },
        // },
      ],
    },
    {
      title: "Regularização",
      options: [
        {
          field: "Tipos de Regularização",
          action: {
            title: "Tipos de Regularização",
            element: <RegularizationType />,
          },
        },
        {
          field: "Parâmetros para Regularização",
          action: {
            title: "Parâmetros de Regularização",
            element: <RegularizationParam />,
          },
        },
        {
          field: "Regularização",
          action: {
            title: "Regularização",
            element: <Regularization />,
          },
        },
        {
          //Tela
          field: "Painel de Controle de Regularizações",
          action: {
            title: "Painel de Regularização",
            element: <RegularizationPanel />,
          },
        },
      ],
    },
    {
      title: "Integração Bancária",
      options: [
        {
          field: "Bancos",
          action: {
            title: "Bancos",
            element: <Banks />,
          },
        },
        {
          field: "Agências",
          action: {
            title: "Agências",
            element: <Agency />,
          },
        },
        {
          field: "Contas Correntes",
          action: {
            title: "Conta Corrente",
            element: <CheckingAccount />,
          },
        },
        {
          field: "Configuração dos Boletos",
          action: {
            title: "Boletos",
            element: <Ticket />,
          },
        },
        {
          field: "Portador",
          action: {
            title: "Portador",
            element: <Holder />,
          },
        },
        {
          field: "Painel de Controle de Cobranças",
          action: {
            title: "Painel de Boletos",
            element: <TicketPanel />,
          },
        },
        // {
        //   //Tela (possuí pesquisa avançada, emissão de relatórios, cancelamento de registro, exclusão de registro, reprocessamento de registro com erro, importação de arquivo e procesasmento de registro)
        //   field: "Importação de Arquivos CNR",
        //   action: {
        //     title: "Importação de Arquivo CNR",
        //     element: <CNRPanel />,
        //   },
        // },
      ],
    },
    // {
    //   title: "Relatórios",
    //   options: [
    //     {
    //       //Seleção de Relatórios e impressão
    //       field: "Relatório de Fechamento de Caixa",
    //     },
    //     {
    //       //Seleção de Relatórios de venda de itens e impressão
    //       field: "Venda de Itens",
    //     },
    //     {
    //       //Seleção de ticket e impressão
    //       field: "Re-Impressão de Ticket de Venda",
    //     },
    //   ],
    // },
    // {
    //   title: "Configurações",
    //   options: [
    //     {
    //       field: "Banco de Dados",
    //     },
    //   ],
    // },
    {
      title: "Ferramentas",
      options: [
        // {
        //   field: "Visualizar Conexões Ativas",
        // },
        {
          field: "Trocar Senha",
          action: {
            title: "Trocar Senha",
            element: <ChangePassword />,
          },
        },
      ],
    },
    {
      title: "Ajuda",
      options: [
        {
          //informações sobre a portaria
          field: "Sobre",
        },
        // {
        //   //Botão não fez nada
        //   field: "Ajuda",
        // },
        // {
        //   //copyright
        //   field: "Copyright",
        // },
      ],
    },
  ],
};

export const ConciergeNav: NavType = {
  title: "Portaria",
  icon: <AiOutlineKey />,
  sistemShortcuts: [
    {
      title: "Cadastros",
      options: [
        {
          field: "Agentes",
          permission: ["concierge.agents.add"],
          action: {
            title: "Cadastro de Agentes",
            element: <AddNewAgent />,
          },
        },
        {
          field: "Fotos",
          action: {
            title: "Cadastro de Foto",
            element: <AddNewPicturePopUp />,
          },
        },
        {
          field: "Convidados",
          permission: ["concierge.guest-employee.add"],
          action: {
            title: "Cadastro de Convidado",
            element: <AddNewGuestPopUp />,
          },
        },
        // {
        //   //Ver digital do associado e possívelmente cadastro - confirmar ainda
        //   field: "Biometria",
        // },
        {
          field: "QR Code",
          action: {
            link: true,
            url: "/portaria/registro-de-entradas",
          },
        },
        {
          //Cadastro de automóveis
          field: "Automóveis",
          action: {
            title: "Cadastro de Automóvel",
            element: <AddNewAutoMobile />,
          },
        },
        //Eventos não está no módulo portaria
        // {
        //   //Cadastro de eventos
        //   field: "Eventos",
        // },
        // {
        //   //Uma tela do Wizard: Telas > iniciar, seleção de equipamentos, parâmetros de busca de sócios, seleção de sócios, parâmetros de execução e conclusão
        //   //Confirmar com Edson
        //   field: "Carga de digitais para os equipamentos",
        // },
        // {
        //   //cadastro de grupo de equipamentos
        //   field: "Grupo de equipamentos",
        // },
        // {
        //   //cadastro de equipamentos
        //   field: "Equipamentos",
        // },
      ],
    },
    {
      title: "Clubes Conveniados",
      options: [
        {
          //Cadastro
          field: "Clubes Conveniados",
          action: {
            title: "Cadastro de Clubes Conveniados",
            element: <AddNewClube />,
          },
        },
        {
          //Cadastro
          field: "Sócios de Clubes Conveniados",
          action: {
            title: "Cadastro de Sócios de Clubes Conveniados",
            element: <AddNewConvenedAssociate />,
          },
        },
      ],
    },
    {
      title: "Painel de Controle",
      //verificar se popUp fica mais fácil, se sim, criar
      options: [
        {
          //busca de associados
          field: "Painel de Busca de Associados",
          action: {
            link: true,
            url: "/portaria/socio",
          },
        },
        // {
        //   // Opções
        //   //  - Busca de Associados
        //   //  - Pesquisa de Acesso
        //   //  Associado
        //   //   - Cadastro de Fotos
        //   //   - Cadastro de Convidados
        //   //   - Cadastro de digitais
        //   //   - Cadastro de Carteirinhas
        //   //   - Cadastro de Automóveis
        //   //   Atalhos
        //   //   - Clubes Convêniados
        //   //   - Sócios Convêniados
        //   //   Funções
        //   //   vazio - creio que aparece função quando seleciona alguém
        //   // field: "Painel de Controle de Portaria",
        //   // Oculto por hora
        // },
        {
          //pesquisa de acessos
          field: "Painel de pesquisa de Acessos",
          action: {
            link: true,
            url: "/portaria/controle-de-acessos",
          },
        },
        //Evento não entra no módulo de portaria
        // {
        //   //Registro de Acesso ao evento
        //   field: "Painel de Registro de Acesso aos Eventos",
        // },

        // {
        //   //LOG de biometrias
        //   //tem filtro e relatório
        //Confirmar com o Edson
        //   field: "Painel de LOG de Biometrias",
        // },
      ],
    },
    // {
    //  Não entra na v1
    //   title: "Configurações",
    //   options: [
    //     // {
    //     //Não entra no módulo de portaria
    //     //   //configurar conexão com banco de dados
    //     //   field: "Banco de Dados",
    //     // },
    //     {
    //       //configuração de cores do sistema
    //       //cor de fontes
    //       //cor dos campos de múltipla pesquisa
    //       //cores dos campos
    //       //cores dos campos desabilitados
    //       //cores dos campos obrigatórios
    //       //cor dos links
    //       //cor da barra de ajuda
    //       //layout pré-definido
    //       //cores de componentes
    //       field: "Skins",
    //     },
    //   ],
    // },
    ...defaultShortCut,
  ],
};

export const PDVNav: NavType = {
  title: "PDV",
  icon: <AiOutlineShop />,
  sistemShortcuts: [
    {
      title: "Cadastrar",
      options: [
        {
          field: "Painel de Busca de Associados",
          action: {
            link: true,
            url: "/pdv/socio",
          },
        },
        // {
        //   //Seleção de caixa
        //   //Filtros Cód. Sócio, Nome, Sobrenome, Matrícula, Categoria, tipo de dependente, tipo de sócio, sócios que praticam a atividade, turma do aluno, forma de pagamento
        //   //Tabela de Sócios
        //   //parametros, forma de pagamento, tabela de cobranças, quantidade, valor unitário, valor total, histórico, atendente/vendendor, professir/empresa, imprimir recibo?, nr de vias do recibo
        //   field: "Wizard de Lançamentos",
        // },
        {
          //Tela de Lançamentos com umas coisinhas a mais
          field: "Lançamentos",
          action: {
            link: true,
            url: "/pdv/lancamentos",
          },
        },
        {
          //tela de Painel de Lançamentos
          field: "Painel de Lançamentos",
          action: {
            link: true,
            url: "/pdv/painel-de-lancamentos",
          },
        },
        {
          // Cadastro
          field: "Estorno de Lançamentos de Terceiros/Instrutores",
          action: {
            title: "Estorno de Lançamento de Terceiros",
            element: (
              <AddReversalRelease url="pdv/financialPost/thirdPartyChargeBack" />
            ),
          },
        },
      ],
    },
    {
      title: "Relatórios",
      options: [
        {
          //campos para fazer a impressão de um relatório
          field: "Relatório de Fechamento de Caixa",
          action: {
            title: "Relatório de Fechamento de Caixa",
            element: <CashierClosureReport />,
          },
        },
        {
          //ordenação e impressão da lista
          field: "Lista de Itens",
          // action: {
          //   title: "Lista de Itens",
          //   element: <ProductsListFromPriceTableReport />,
          // },
        },
        {
          //seleção e impressão
          field: "Venda de Itens",
          action: {
            title: "Venda de Itens",
            element: <SellItensReport />,
          },
        },
        {
          //seleção e impressão
          field: "Impressão de Consumo",
          // action: {
          //   title: "Impressão de Consumo",
          //   element: <ComsumptionTicket />,
          // },
        },
        {
          //seleção e impressão
          field: "Re-Impressão de Ticket de Venda",
          action: {
            title: "Re-Impressão de Ticket de Venda",
            element: <RePrintTicket />,
          },
        },
      ],
    },
    ...defaultShortCut,
  ],
};

export const locationSearchFields = [
  {
    name: "code",
    header: "Código",
    flex: 0.2,
    type: "number",
    minWidth: 100,
  },
  {
    name: "description",
    header: "Descrição",
    flex: 0.2,
    minWidth: 100,
  },
];

export const LoanNav: NavType = {
  title: "Empréstimos",
  icon: <AiOutlineExport />,
  sistemShortcuts: [
    {
      title: "Cadastros",
      options: [
        {
          field: "Locais",
          permission: ["loans.place.add"],
          action: {
            title: "Locais",
            element: <AddNewLocation />,
          },
        },
        {
          //Link para associados
          field: "Painel de Busca de Associados",
          action: {
            link: true,
            url: "/emprestimos/socio",
          },
        },
      ],
    },
    {
      title: "Objetos",
      options: [
        {
          field: "Estado",
          action: {
            title: "Estado do Objeto",
            element: (
              <AddNewDefault
                url="/loan/objectState"
                successMessage="Estado do Objeto Adicionado!"
                hasObservations
                searchModal={{
                  columns: locationSearchFields,
                  modalTitle: "Estado do Objeto",
                  queryParams: {
                    actions: ["loan-state"],
                    url: "/loan/ObjectState",
                  },
                }}
              />
            ),
          },
        },
        {
          field: "Marca",
          action: {
            title: "Marca",
            element: (
              <AddNewDefault
                url="/loan/objectBrand"
                successMessage="Marca Adicionada!"
                hasObservations
                searchModal={{
                  columns: locationSearchFields,
                  modalTitle: "Marca do Objeto",
                  queryParams: {
                    actions: ["loan-brand"],
                    url: "/loan/ObjectBrand",
                  },
                }}
              />
            ),
          },
        },
        {
          field: "Grupo",
          action: {
            title: "Grupo de Objeto",
            element: (
              <AddNewDefault
                url="/loan/objectGroup"
                hasObservations
                successMessage="Grupo Adicionada!"
                searchModal={{
                  columns: locationSearchFields,
                  modalTitle: "Grupo do Objeto",
                  queryParams: {
                    actions: ["loan-group"],
                    url: "/loan/ObjectGroup",
                  },
                }}
              />
            ),
          },
        },
        {
          field: "Tipo",
          action: {
            title: "Tipo do Objeto",
            element: (
              <AddNewDefault
                url="/loan/objectType"
                hasObservations
                successMessage="Tipo Adicionado!"
                searchModal={{
                  columns: locationSearchFields,
                  modalTitle: "Tipo do Objeto",
                  queryParams: {
                    actions: ["loan-type"],
                    url: "/loan/ObjectType",
                  },
                }}
              />
            ),
          },
        },
        {
          field: "Categoria",
          action: {
            title: "Categoria do Objeto",
            element: (
              <AddNewDefault
                url="/loan/objectCategory"
                successMessage="Categoria Adicionada!"
                hasObservations
                searchModal={{
                  columns: locationSearchFields,
                  modalTitle: "Categoria do Objeto",
                  queryParams: {
                    actions: ["loan-category"],
                    url: "/loan/ObjectCategory",
                  },
                }}
              />
            ),
          },
        },
        {
          field: "Objetos",
          permission: ["loans.objects.add", "loans.objects.edit"],
          action: {
            title: "Objetos",
            element: (
              <AddNewDefault
                url="/loan/object"
                hasName
                successMessage="Objeto Adicionado!"
                searchModal={{
                  columns: locationSearchFields,
                  modalTitle: "Objeto",
                  queryParams: {
                    actions: ["loan-object"],
                    url: "/loan/object",
                  },
                }}
              />
            ),
          },
        },
        {
          field: "Empréstimos",
          action: {
            title: "Empréstimos",
            element: <AddNewLoan />,
          },
        },
        {
          field: "Devoluções",
          action: {
            title: "Devolução",
            element: <ReturnModal />,
          },
        },
        {
          field: "Painel de Controle",
          action: {
            link: true,
            url: "/emprestimos/loan-control",
          },
        },
      ],
    },
    ...defaultShortCut,
  ],
};

export const BarNav: NavType = {
  title: "Bar",
  icon: <AiOutlineCoffee />,
  sistemShortcuts: [
    {
      title: "Cadastrar",
      options: [
        {
          field: "Garçons",
          permission: ["pub.waiter.add", "pub.waiter.edit"],
          action: {
            title: "Cadastro de Garçom",
            element: (
              <AddNewWaiter
                permission={["pub.waiter.add", "pub.waiter.edit"]}
              />
            ),
          },
        },
        {
          field: "Local",
          action: {
            title: "Local",
            element: <AddNewLocation />,
          },
        },
        // {
        //   field: "Grupo de Mesas", ** PRECISA SER DEV **
        // },
        // {
        //   field: "Tipo de Mesas", ** PRECISA SER DEV **
        // },
        {
          field: "Mesas",
          permission: ["pub.table.add", "pub.table.edit"],
          action: {
            title: "Cadastro de Mesa",
            element: (
              <AddNewTable permission={["pub.table.add", "pub.table.edit"]} />
            ),
          },
        },
      ],
    },
    {
      title: "Painel de Controle",
      options: [
        {
          field: "Painel de Busca de Agentes",
          action: {
            link: true,
            url: "/bar/socio",
          },
        },
        {
          field: "Painel de Lançamentos",
          action: {
            link: true,
            url: "/bar/painel-de-lancamentos",
          },
        },
        {
          field: "Painel de Controle de Mesas",
          action: {
            link: true,
            url: "/bar/painel-de-controle-de-mesas",
          },
        },
        {
          field: "Painel de Pedidos",
          action: {
            link: true,
            url: "/bar/painel-de-pedidos",
          },
        },
        // {
        //   //pesquisa f2 -> traz um painel de mesas
        //   //  Campos {
        //   // codigo_seq: string;
        //   // date: Date;(label: Data e Hora do LOG)
        //   // machine_ip: string;
        //   // cashier_code: string; (pesquisa f2)
        //   // user_code: string; (pesquisa f2)
        //   // supervisor_code: string; (pesquisa f2)
        //   // table_origin_number: number; (label: Número Mesa Origem)
        //   // table_destiny_number: number; (label: Número Mesa Destino)
        //   // agent: string;
        //   // executed_operation: string;
        //   // justification_for_operation: string;
        //   //           }
        //   field: "LOG de Operações com mesas", ** PRECISA SER DEV **
        // },
      ],
    },
    // {
    //   title: "Relatórios", ** PRECISA SER DEV **
    //   options: [
    //     {
    //       //Ordenação (radiogroup) {
    //       //data,
    //       //matrícula,
    //       //nome do agente,
    //       //cod. ticket,
    //       //}
    //       //Tipo de Relatório (radiogroup) {
    //       //normal,
    //       //resumido,
    //       //}
    //       //Tipo de Lançamento (radiogroup) {
    //       //todos,
    //       //Dinheiro,
    //       //Outros(Cartão),
    //       //}
    //       //  Campos {
    //       // period_from: Date; (label: Período De:)
    //       // initial_time: Date;(label: Hora Inicial)
    //       // period_to: Date; (label: Até)
    //       // final_time: Date; (label: Hora Final)
    //       // agent_code: string; (pesquisa f2)
    //       // agent_name: string; (label: Nome)
    //       // surname: string;
    //       // payment_method: string; (pesquisa f2, abre um modal com formas de pagamento, e quando você fecha esse modal ele abre um outro
    //       // de cadastro de planos de pagamento
    //       //)
    //       // enrollment: string | number;
    //       // agent_category: string; (label: Categoria do Agente)
    //       // debt_type_code: string;
    //       //           }
    //       //Ação: Imprimir e cancelar
    //       field: "Relatório de Fechamento de Caixa", ** PRECISA SER DEV **
    //     },
    //     {
    //       //Ordenação (radiogroup) {
    //       //código,
    //       //valor,
    //       //descrição,
    //       //}
    //       //Ação: Imprimir e cancelar
    //       field: "Lista de Itens",
    //     },
    //     {
    //       //Ordenação (radiogroup) {
    //       //cód item,
    //       //descrição,
    //       //}
    //       //  Campos {
    //       // period_from: Date; (label: Período De:)
    //       // period_to: Date; (label: Até)
    //       // agent_code: string; (pesquisa f2)
    //       // agent_name: string; (label: Nome)
    //       // surname: string;
    //       // payment_method: string; (pesquisa f2, abre um modal com formas de pagamento, e quando você fecha esse modal ele abre um outro
    //       // de cadastro de planos de pagamento
    //       //)
    //       // enrollment: string | number;
    //       // agent_category: string; (label: Categoria do Agente)
    //       // item_code: string;
    //       // item_description: string;
    //       //           }
    //       //Ação: Imprimir e cancelar
    //       field: "Venda de Itens",
    //     },
    //     {
    //       //Ordenação (radiogroup) {
    //       //data,
    //       //matrícula,
    //       //nome do agente,
    //       //cod. ticket,
    //       //}
    //       //Tipo de Relatório (radiogroup) {
    //       //normal,
    //       //resumido,
    //       //}
    //       //Tipo de Lançamento (radiogroup) {
    //       //todos,
    //       //Dinheiro,
    //       //Outros,
    //       //}
    //       //  Campos {
    //       // period_from: Date; (label: Período De:)
    //       // period_to: Date; (label: Até)
    //       // agent_code: string; (pesquisa f2)
    //       // agent_name: string; (label: Nome)
    //       // surname: string;
    //       // enrollment: string | number;
    //       //           }
    //       //Ação: Imprimir e cancelar
    //       field: "Impressão de Consumo", ** PRECISA SER DEV **
    //     },
    //     {
    //       //pesquisa f2 -> traz um painel de mesas
    //       //  Campos {
    //       // cashier: string; (campo desabilitado, ele pega o código direto do caixa que está selecionado)
    //       // ticket_number: string;
    //       //           }
    //       //Ação: Imprimir e cancelar
    //       field: "Reimpressão de Ticket", ** PRECISA SER DEV **
    //     },
    //   ],
    // },
    ...defaultShortCut,
  ],
};

export const ScheduleNav: NavType = {
  title: "Agendamentos",
  icon: <AiOutlineCalendar />,
  sistemShortcuts: [
    {
      title: "Cadastrar",
      options: [
        {
          field: "Painel de Busca de Associados",
          action: {
            title: "Painel de Busca de Associados",
            element: <AssociateTable redirectOnClickRow={false} />,
          },
        },
        {
          field: "Médicos",
          permission: ["schedule.doctors.add"],
          action: {
            title: "Médico",
            element: <AddNewDoctor />,
          },
        },
        {
          field: "Situação",
          permission: ["schedule.situations.add"],
          action: {
            title: "Situação",
            element: <AddNewSituation />,
          },
        },
        {
          field: "Tipo de Agendamento",
          permission: ["schedule.type.add"],
          action: {
            title: "Tipo de Agendamento",
            element: (
              <AppointmentAddNewDefault
                url="/appointment/type"
                messages={{
                  onAddMessage: "Tipo Agendamento Adicionado!",
                  onEditMessage: "Tipo Agendamento Alterado com Sucesso!",
                }}
                searchModal={{
                  modalTitle: "Tipo Agendamentos",
                  queryParams: {
                    actions: ["type"],
                    url: "appointment/type",
                  },
                }}
              />
            ),
          },
        },
        {
          field: "Categoria do Agendamento",
          permission: ["schedule.category.add"],
          action: {
            title: "Categoria do Agendamento",
            element: (
              <AppointmentAddNewDefault
                url="/appointment/category"
                messages={{
                  onAddMessage: "Categoria do Agendamento Adicionado!",

                  onEditMessage:
                    "Categoria do Agendamento Alterado com Sucesso!",
                }}
                searchModal={{
                  modalTitle: "Categorias dos Agendamentos",
                  queryParams: {
                    actions: ["category"],
                    url: "appointment/category",
                  },
                }}
              />
            ),
          },
        },
        {
          field: "Status do Agendamento",
          permission: ["schedule.status.add"],
          action: {
            title: "Status do Agendamento",
            element: (
              <AppointmentAddNewDefault
                url="/appointment/status"
                messages={{
                  onAddMessage: "Status do Agendamento Adicionado!",
                  onEditMessage: "Status do Agendamento Alterado com Sucesso!",
                }}
                searchModal={{
                  modalTitle: "Status do Agendamento",
                  queryParams: {
                    actions: ["status"],
                    url: "appointment/status",
                  },
                }}
              />
            ),
          },
        },
        {
          field: "Ocorrências",
          action: {
            title: "Ocorrência",
            element: <AddNewOcurrence />,
          },
        },

        {
          field: "Penalidade",
          permission: ["schedule.penalties.add"],
          action: {
            title: "Penalidade",
            element: (
              <AppointmentAddNewDefault
                url="/appointment/penalty"
                messages={{
                  onAddMessage: "Penalidade Adicionada!",
                  onEditMessage: "Penalidade Alterada com Sucesso!",
                }}
                searchModal={{
                  modalTitle: "Penalidades",
                  queryParams: {
                    actions: ["penalty"],
                    url: "appointment/penalty",
                  },
                }}
              />
            ),
          },
        },
        // {
        //   //Cadastro
        //   //campos: Cód. seq (disabled), cod usuário, usuario medico (boolean)
        //   field: "Usuário do Agendamento",
        // },
      ],
    },
    {
      title: "Consultas",
      options: [
        {
          field: "Configurar - Agenda",
          permission: ["schedule.schedule.add"],
          action: {
            title: "Agenda",
            element: <AddNewSchedule />,
          },
        },
        {
          field: "Agendamento",
          permission: ["schedule.consultations.add"],
          action: {
            title: "Agendamentos",
            element: <AddNewApoitment />,
          },
        },
        {
          field: "Painel de Busca de Consultas",
          permission: ["schedule.consultations.view"],
          action: {
            link: true,
            url: "/agendamentos/consultas",
          },
        },
        {
          field: "Atestados Particulares",
          action: {
            link: true,
            url: "/agendamentos/atestados",
          },
        },
      ],
    },
    ...defaultShortCut,
  ],
};
export const gangNav: NavType = {
  title: "Turmas",
  icon: <AiOutlineTeam />,
  sistemShortcuts: [
    {
      title: "Cadastros",
      options: [
        {
          field: "Instrutor",
          permission: ["classes.instructor.add", "classes.instructor.edit"],
          action: {
            title: "Novo Instrutor",
            element: (
              <AddNewInstructor
                permission={[
                  "classes.instructor.add",
                  "classes.instructor.edit",
                ]}
              />
            ),
          },
        },
        {
          field: "Alunos Associados",
          action: {
            title: "Alunos Associados",
            element: <StudentModal />,
          },
        },
        {
          field: "Painel de Busca de Associados",
          action: {
            title: "",
            element: <AssociateTable redirectOnClickRow={false} />,
          },
        },
        {
          field: "Atividades",
          permission: ["classes.activities.add", "classes.activities.edit"],
          action: {
            title: "Nova Atividade",
            element: (
              <AddNewActivitie
                permission={[
                  "classes.activities.add",
                  "classes.activities.edit",
                ]}
              />
            ),
          },
        },
        {
          field: "Atividades dos Associados",
          action: {
            title: "Atividade dos Associados",
            element: <AssociatesActivitiesModal />,
          },
        },
        {
          field: "Eventos",
          permission: ["classes.scheduled.add", "classes.scheduled.edit"],
          action: {
            title: "Eventos",
            element: (
              <AddNewEvent
                permission={["classes.scheduled.add", "classes.scheduled.edit"]}
              />
            ),
          },
        },
        {
          field: "Local",
          permission: ["classes.place.add", "classes.place.edit"],
          action: {
            title: "Local",
            element: (
              <AddNewLocation
                permission={["classes.place.add", "classes.place.edit"]}
              />
            ),
          },
        },
        {
          field: "Tipo de Atividade",
          permission: ["classes.scheduled.add", "classes.scheduled.edit"],
          action: {
            title: "Tipo de Atividade",
            element: (
              <ActivitieType
                permission={["classes.scheduled.add", "classes.scheduled.edit"]}
              />
            ),
          },
        },
        {
          field: "Feriados",
          permission: ["classes.scheduled.add", "classes.scheduled.edit"],
          action: {
            title: "Feriados",
            element: (
              <AddNewHoliday
                permission={["classes.scheduled.add", "classes.scheduled.edit"]}
              />
            ),
          },
        },
      ],
    },
    {
      title: "Turmas",
      options: [
        {
          field: "Tipo de Turma",
          action: {
            title: "Tipos de Turma",
            element: (
              <AddNewDefault
                url="/class/classType"
                hasEnabled
                successMessage="Tipo de Turma Adicionada!"
                searchModal={{
                  columns: locationSearchFields,
                  queryParams: {
                    url: "class/classType",
                    actions: ["classType"],
                  },
                  modalTitle: "Tipo de Turma",
                }}
              />
            ),
          },
        },
        {
          field: "Classificação",
          action: {
            title: "Classificação",
            element: <ClassClassification />,
          },
        },
        {
          field: "Turmas",
          permission: ["classes.classes.add"],
          action: {
            title: "Turmas",
            element: <AddNewClass permission={["classes.classes.add"]} />,
          },
        },
        // {
        //   field: "Alunos da Turma",
        // },
        {
          field: "Aulas",
          action: {
            title: "Aulas",
            element: <AddNewLesson />,
          },
        },
        // {
        //   field: "Acompanhamento de Aulas Experimentais",
        // },
        {
          field: "Frequência",
          action: {
            title: "Frequências",
            element: <ClassFrequencyModal />,
          },
        },
        // {
        //   field: "Painel de Controle de Chamada", ** PRECISA SER DEV **
        // },
        // {
        //   field: "Wizard de Geração de Aula",
        // },
      ],
    },
    {
      title: "Lista de Espera",
      options: [
        {
          field: "Lista de Espera",
          action: {
            title: "Listas de Espera",
            element: <AddNewWaitList />,
          },
        },
      ],
    },
    ...defaultShortCut,
  ],
};
export const cpNav: NavType = {
  title: "Centro Poliesportivo",
  icon: <BiDumbbell />,
  sistemShortcuts: [
    {
      title: "Cadastrar",
      options: [
        {
          field: "Professores",
          permission: ["cp.teachers.add"],
          action: {
            title: "Professor",
            element: <AddNewCPTeacher />,
          },
        },
        {
          field: "Painel de Busca de Associados",
          action: {
            link: true,
            url: "/cp/socio",
          },
        },
        {
          field: "Atividades",
          permission: ["cp.activities.add", "cp.activities.edit"],
          action: {
            title: "Atividade",
            element: <AddNewActivitie />,
          },
        },
        {
          field: "Atividades dos Associados",
          action: {
            title: "Atividade dos Associados",
            element: <AssociatesActivitiesModal />,
          },
        },
        {
          field: "Eventos",
          permission: ["cp.events.add", "cp.events.edit"],
          action: {
            title: "Eventos",
            element: (
              <AddNewEvent permission={["cp.events.add", "cp.events.edit"]} />
            ),
          },
        },
        {
          field: "Marca",
          permission: ["cp.brand.add", "cp.brand.edit"],
          action: {
            title: "Marca",
            element: (
              <AppointmentAddNewDefault
                url="/cp/brand"
                messages={{
                  onAddMessage: "Marca Adicionada!",
                  onEditMessage: "Marca Atualizada!",
                }}
                permission={["cp.brand.edit"]}
                searchModal={{
                  modalTitle: "Marcas",
                  queryParams: {
                    actions: ["brand-cp"],
                    url: "cp/brand",
                  },
                }}
              />
            ),
          },
        },
        {
          field: "Tipo de Equipamento",
          permission: ["cp.equipment-type.add", "cp.equipment-type.edit"],
          action: {
            title: "Tipo de Equipamento",
            element: (
              <AppointmentAddNewDefault
                url="/cp/equipmentType"
                messages={{
                  onAddMessage: "Tipo de Equipamento Adicionado!",
                  onEditMessage: "Tipo de Equipamento Atualizado!",
                }}
                permission={["cp.equipment-type.edit"]}
                searchModal={{
                  modalTitle: "Tipo de Equipamento",
                  queryParams: {
                    actions: ["equipmentType"],
                    url: "cp/equipmentType",
                  },
                }}
              />
            ),
          },
        },
        {
          field: "Equipamento",
          permission: ["cp.equipment.add"],
          action: {
            title: "Equipamento",
            element: <AddNewEquipmentCP />,
          },
        },
        {
          field: "Grupo Muscular",
          permission: ["cp.muscle-group.add", "cp.muscle-group.edit"],
          action: {
            title: "Grupo Muscular",
            element: (
              <AppointmentAddNewDefault
                url="/cp/muscleGroup"
                messages={{
                  onAddMessage: "Grupo Muscular Adicionado!",
                  onEditMessage: "Grupo Muscular Atualizado!",
                }}
                permission={["cp.muscle-group.edit"]}
                searchModal={{
                  modalTitle: "Grupo Muscular",
                  queryParams: {
                    actions: ["muscle_group"],
                    url: "cp/muscleGroup",
                  },
                }}
              />
            ),
          },
        },
        {
          field: "Objetivo",
          permission: ["cp.objective.add", "cp.objective.edit"],
          action: {
            title: "Objetivo",
            element: (
              <AppointmentAddNewDefault
                url="/cp/objective"
                messages={{
                  onAddMessage: "Objetivo Adicionado!",
                  onEditMessage: "Objetivo Atualizado!",
                }}
                permission={["cp.objective.edit"]}
                searchModal={{
                  modalTitle: "Objetivo",
                  queryParams: {
                    actions: ["objective"],
                    url: "cp/objective",
                  },
                }}
              />
            ),
          },
        },
        {
          field: "Exercícios",
          permission: ["cp.exercises.add", "cp.exercises.edit"],
          action: {
            title: "Exercício",
            element: <AddNewExerciseCP />,
          },
        },
        {
          field: "Encontros",
          action: {
            title: "Encontro",
            element: <AddNewEncounter />,
          },
        },
        {
          field: "Painel de Encontros",
          action: {
            link: true,
            url: "cp/encontros",
          },
        },
      ],
    },
    // {
    //   title: "Painel de Séries",
    //   options: [
    //     {
    //       field: "Frequência das Séries",
    //     },
    //     {
    //       field: "Ficha de Musculação",
    //     },
    //     // {
    //     //   field: "Ficha de Frequência",
    //     // },
    //     // {
    //     //   field: "Reimpressão da Ficha de Frequência",
    //     // },
    //     {
    //       field: "Cadastro da Série Modelo",
    //     },
    //   ],
    // },
    ...defaultShortCut,
  ],
};
export const littleClubNav: NavType = {
  title: "Clubinho",
  icon: <AiOutlineFlag />,
  sistemShortcuts: [
    {
      title: "Cadastros",
      options: [
        {
          field: "Atividade dos Associados",
          action: {
            title: "Atividade dos Associados",
            element: <AssociatesActivitiesModal />,
          },
        },
      ],
    },
    {
      title: "Painel de Controle",
      options: [
        {
          field: "Painel de Busca de Associados",
          action: {
            link: true,
            url: "/clubinho/socio",
          },
        },
        {
          field: "Painel de Frequência",
          action: {
            link: true,
            url: "/clubinho/frequencia",
          },
        },
        {
          field: "Painel de Operação de Entrada/Saída",
          action: {
            link: true,
            url: "/clubinho/entrada-e-saida",
          },
        },
        {
          field: "Painel de Crianças Presentes",
          action: {
            link: true,
            url: "/clubinho/criancas-presentes",
          },
        },
      ],
    },
    ...defaultShortCut,
  ],
};

export const LibraryNav: NavType = {
  title: "Biblioteca",
  icon: <AiOutlineRead />,
  sistemShortcuts: [
    {
      title: "Cadastrar",
      options: [
        // {
        //   field: "Observações", ** PRECISA SER DEV **
        // },
        // {
        //   field: "Narrativas", ** PRECISA SER DEV **
        // },
        {
          field: "Assuntos",
          action: {
            title: "Assuntos",
            element: (
              <AddNewDefault
                url="/library/subject"
                successMessage="Assunto Adicionado!"
                permission={["library.subject.add", "library.subject.edit"]}
                searchModal={{
                  columns: locationSearchFields,
                  modalTitle: "Assuntos",
                  queryParams: {
                    actions: ["book-subject"],
                    url: "/library/subject",
                  },
                }}
              />
            ),
          },
        },
        {
          field: "Autores",
          permission: ["library.authors.add", "library.authors.edit"],
          action: {
            title: "Cadastro de Autores",
            element: (
              <AddNewDefault
                url="/library/author"
                successMessage="Autor Adicionado!"
                permission={["library.authors.add", "library.authors.edit"]}
                searchModal={{
                  columns: locationSearchFields,
                  modalTitle: "Autores",
                  queryParams: {
                    actions: ["author-modal"],
                    url: "/library/author",
                  },
                }}
              />
            ),
          },
        },
        {
          field: "Editais",
          permission: ["library.publisher.add", "library.publisher.edit"],
          action: {
            title: "Cadastro de Editora",
            element: (
              <AddNewDefault
                url="/library/publisher"
                successMessage="Editora Adicionada!"
                searchModal={{
                  columns: locationSearchFields,
                  modalTitle: "Editoras",
                  queryParams: {
                    actions: ["publisher-modal"],
                    url: "/library/publisher",
                  },
                }}
              />
            ),
          },
        },

        // {
        //   field: "Classificação da Obra", ** PRECISA SER DEV **
        // },
        {
          field: "Obras",
          permission: ["library.works-search.add", "library.works-search.edit"],
          action: {
            title: "Cadastro de Obras",
            element: (
              <AddBook
                permission={[
                  "library.works-search.add",
                  "library.works-search.edit",
                ]}
              />
            ),
          },
        },
      ],
    },
    {
      title: "Painel de Controle",
      options: [
        {
          field: "Reservas",
          permission: ["library.reservation.edit", "library.reservation.add"],
          action: {
            title: "Reservas",
            element: <NewReservation />,
          },
        },
        {
          field: "Empréstimo",
          permission: ["library.loan.add", "library.loan.add"],
          action: {
            title: "Empréstimo",
            element: <NewBookLoan />,
          },
        },
        // {
        //   field: "Devolução",
        // },
        {
          field: "Painel de Busca de Agentes",
          action: {
            link: true,
            url: "/biblioteca/socio",
          },
        },
        {
          field: "Painel de Busca de Empréstimos",
          action: {
            link: true,
            url: "/biblioteca/emprestimos",
          },
        },
        {
          field: "Painel de Busca de Reservas",
          action: {
            link: true,
            url: "/biblioteca/reservas",
          },
        },
        // {
        //   field: "Controle Interno da Biblioteca",
        // },
      ],
    },
    {
      title: "Localidades",
      options: [
        {
          field: "Munícipios",
          action: {
            title: "Cadastro de Munícipios",
            element: <AddNewCounty />,
          },
        },
        {
          field: "Estados",
          action: {
            title: "Cadastro de Estados",
            element: <AddNewState />,
          },
        },
        {
          field: "Países",
          action: {
            title: "Cadastro de Países",
            element: <AddNewCountry />,
          },
        },

        {
          field: "Feriados",
          action: {
            title: "Cadastro de Feriados",
            element: <AddNewHoliday />,
          },
        },
      ],
    },
    ...defaultShortCut,
  ],
};

export const GolfNav: NavType = {
  title: "Golfe",
  icon: <MdSportsGolf />,
  sistemShortcuts: [
    {
      title: "Cadastros",
      options: [
        {
          field: "Agentes",

          action: {
            title: "Cadastro de Sócios",
            element: <AddNewAssociate />,
          },
        },
        {
          field: "Golfistas",
          permission: ["golf.golfer.add"],
          action: {
            title: "Cadastro de Golfista",
            element: <NewGolfer />,
          },
        },
        {
          field: "Caddies",
          permission: ["golf.caddies.add"],
          action: {
            title: "Cadastro de Caddies",
            element: <AddNewCaddie />,
          },
        },
        {
          field: "Atividades",
          action: {
            title: "Cadastro de Caddies",
            element: <AddNewActivitie />,
          },
        },
        {
          field: "Atividades dos Associados",
          action: {
            title: "Atividade dos Associados",
            element: <AssociatesActivitiesModal />,
          },
        },
        // {
        //   field: "Impressão de Etiquetas",
        // },
        {
          field: "Tipo de Equipamento",
          permission: ["golf.equipment.type.add"],
          action: {
            title: "Cadastro de Tipo de Equipamento",
            element: <OnAddNewEquipmentType />,
          },
        },
        {
          field: "Equipamentos",
          permission: ["golf.equipment.add"],
          action: {
            title: "Cadastro de Equipamento",
            element: <AddNewEquipment />,
          },
        },
        {
          field: "Carrinhos",
          permission: ["golf.cart.add"],
          action: {
            title: "Cadastro de Carrinho",
            element: <AddNewCart />,
          },
        },
        {
          field: "Bolsas",
          permission: ["golf.bag.add"],
          action: {
            title: "Cadastro de Bolsa",
            element: <AddNewBag />,
          },
        },
        {
          field: "Marca",
          permission: ["golf.brand.add"],
          action: {
            title: "Cadastro de Marca",
            element: <AddNewBrand />,
          },
        },
      ],
    },
    {
      title: "Painel de Controle",
      options: [
        {
          field: "Painel de Busca de Sócios",
          action: {
            link: true,
            url: "/golfe/socio",
          },
        },
        {
          field: "Painel de Equipamentos",
          action: {
            link: true,
            url: "/golfe/cadastros-de-equipamentos",
          },
        },
        // {
        //   field: "Painel de Log de Aviso de Entrada",
        // },
      ],
    },
    {
      title: "Agendamento",
      options: [
        // {
        //   field: "Configurações", ** PRECISA SER DEV **
        // },
        {
          field: "Tipo de Agendamento",
          action: {
            title: "Tipo de Agendamento",
            element: (
              <AppointmentAddNewDefault
                url="/appointment/type"
                messages={{
                  onAddMessage: "Tipo Agendamento Adicionado!",
                  onEditMessage: "Tipo Agendamento Alterado com Sucesso!",
                }}
                searchModal={{
                  modalTitle: "Tipo Agendamentos",
                  queryParams: {
                    actions: ["type"],
                    url: "appointment/type",
                  },
                }}
              />
            ),
          },
        },
        {
          field: "Agendamentos",
          action: {
            link: true,
            url: "/golfe/agendamentos",
          },
        },
      ],
    },
    ...defaultShortCut,
  ],
};

export const ReportNav: NavType = {
  title: "Relatórios",
  icon: <AiOutlineException />,
  sistemShortcuts: [
    {
      title: "Cadastrar",
      options: [
        {
          field: "Categorias",
          permission: ["report.category.add"],
          action: {
            title: "Nova Categoria",
            element: <NewReportCategorie />,
          },
        },
        {
          field: "Cadastro de Relatórios",
          permission: ["report.report-manager.add"],
          action: {
            title: "Novo Relatório",
            element: <AddNewReport />,
          },
        },
        {
          field: "Gerenciador",
          action: {
            link: true,
            url: "/relatorios/relatorios",
          },
        },
        // {
        //   field: "Configurações Específicas dos Reports",
        // },
      ],
    },
    ...defaultShortCut,
  ],
};

export const ElectionsNav: NavType = {
  title: "Eleições",
  icon: <AiOutlineContainer />,
  sistemShortcuts: [
    {
      title: "Cadastrar",
      options: [
        {
          field: "Painel de Busca de Associados",
          action: {
            title: "Painel de Busca de Associados",
            element: <AssociateTable redirectOnClickRow={false} />,
          },
        },
        {
          field: "Tipo de Eleição",
          action: {
            title: "Cadastro de Tipo de Eleição",
            element: <NewElectionType />,
          },
        },
        {
          field: "Tipo de Candidato",
          action: {
            title: "Cadastro de Tipo de Candidato",
            element: <AddNewCandidateType />,
          },
        },
        {
          field: "Coligação",
          action: {
            title: "Cadastro de Coligação",
            element: <AddNewColiation />,
          },
        },
        {
          field: "Partidos",
          action: {
            title: "Cadastro de Partido",
            element: <AddNewParty />,
          },
        },
        {
          field: "Urnas",
          action: {
            title: "Cadastro de Urnas",
            element: <AddNewBallotBox />,
          },
        },
      ],
    },
    {
      title: "Eleição",
      options: [
        {
          field: "Eleição",
          action: {
            link: true,
            url: "/eleicoes/eleicao",
          },
        },
        {
          field: "Candidatos",
          action: {
            link: true,
            url: "/eleicoes/candidatos",
          },
        },
        {
          field: "Painel de Controle de Votação",
          action: {
            link: true,
            url: "/eleicoes/painel-de-controle-de-eleicoes",
          },
        },
        {
          field: "Painel de Apuração de Votos",
          action: {
            link: true,
            url: "/eleicoes/painel-de-apuracao",
          },
        },
      ],
    },
    ...defaultShortCut,
  ],
};

export const APPNav: NavType = {
  title: "App",
  icon: <AiOutlineMobile />,
  sistemShortcuts: defaultShortCut,
};

export const AdminNav: NavType = {
  title: "Admin",
  icon: <AiOutlineSetting />,
  sistemShortcuts: [
    {
      title: "Empresa",
      options: [
        {
          field: "Organização",
          permission: ["admin.organization.add", "admin.organization.edit"],
          action: {
            title: "Nova Organização",
            element: <AddNewOrganization />,
          },
        },
        {
          field: "Empresas/Filiais",
          permission: ["admin.company.add", "admin.company.edit"],
          action: {
            title: "Nova Empresa",
            element: <AddNewBusiness />,
          },
        },
        {
          field: "Departamentos",
          action: {
            title: "Departamentos",
            element: <AdminDepartament />,
          },
        },
        {
          field: "Perfil de Aprovação dos Usuários",
          permission: [
            "admin.approval-user-profile.view",
            "admin.approval-user-profile.add",
            "admin.approval-user-profile.edit",
          ],
          action: {
            title: "Perfil de Aprovação dos Usuários",
            element: <AdminApprovalUserProfile />,
          },
        },
      ],
    },
    {
      title: "Usuários",
      options: [
        {
          field: "Grupos de Usuários",
          action: {
            title: "Novo Grupo de Usuários",
            element: <AddNewUserGroup />,
          },
        },
        {
          field: "Usuários",
          action: {
            title: "Novo Usúario",
            element: <AddNewAdminUser />,
          },
        },
        {
          field: "Controle de Acessos de Usuários",
          action: {
            link: true,
            url: "admin/processos-db",
          },
        },
      ],
    },
    // {
    //   title: "Backup",
    //   options: [
    //     {
    //       field: "Fazer Backup",
    //     },
    //   ],
    // },
    {
      title: "Auditoria/LOG",
      options: [
        {
          field: "Auditoria de Usuários e Ações",
          action: {
            title: "Auditoria de Usuários",
            element: <UserPermissions />,
          },
          // },
          // {
          //   field: "Tabelas de Auditoria",
          // },
          // {
          //   field: "Campos para Auditoria",
        },
      ],
    },
    // {
    //   title: "E-mail",
    //   options: [
    //     {
    //       field: "Configurações",
    //     },
    //     {
    //       field: "Envio de Email",
    //     },
    //     {
    //       field: "Enviados",
    //     },
    //   ],
    // },
    // {
    //   title: "Importações Externas",
    //   options: [
    //     {
    //       field: "Importações Rápidas de Dados",
    //     },
    //     {
    //       field: "Cadsatro de Conexões com outros Bancos de Dados",
    //     },
    //     {
    //       field: "Visões da Base de Dados",
    //     },
    //     {
    //       field: "Interfaces de Importação de dados externos",
    //     },
    //   ],
    // },
    // {
    //   title: "Exportação de Dados",
    //   options: [
    //     {
    //       field: "Exportação Rápida de Dados",
    //     },
    //   ],
    // },
    // {
    //   title: "Atualizações",
    //   options: [
    //     {
    //       field: "Gerar Log de Coleta de Dados",
    //     },
    //   ],
    // },
    // {
    //   title: "Configurações",
    //   options: [
    //     {
    //       field: "Parâmetros Gerais",
    //     },
    //     {
    //       field: "Configurações de Diretorio de Executáveis",
    //     },
    //   ],
    // },
    ...defaultShortCut,
  ],
};

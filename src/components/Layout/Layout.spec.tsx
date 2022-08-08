import { render, screen} from "@testing-library/react";
import DefenderRoute from "../auth/DefenderRoute";
import Layout from "./Layout";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        push: jest.fn(),
      };
    },
  };
});

jest.mock("../../data/hooks/useAuth", () => {
  return jest.fn(() => {
    return {
      user: {
        email: "user@example.com",
      },
      loading: false

    };
  });
});


describe("Layout component", () => {
  const {getByText ,getByAltText} =  render(
    <DefenderRoute>
      <Layout title="Pagina Inicial" caption="Testando o layout">
        Júnior Dering
      </Layout>
    </DefenderRoute>
  )
  it("render correctly", () => {
    expect(getByText('Pagina Inicial')).toBeInTheDocument()
    expect(getByText('Júnior Dering')).toBeInTheDocument()
    expect(getByText('Notificações')).toBeInTheDocument()
    expect(getByText('Testando o layout')).toBeInTheDocument()
    expect(getByAltText('imagem do usuario')).toBeInTheDocument()
    // const link = getByText('Escuro')
    // userEvent.click(link);
    // expect(getByAltText('Claro')).toBeInTheDocument()
    // screen.debug()
  });
});

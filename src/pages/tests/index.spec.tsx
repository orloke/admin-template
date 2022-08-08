import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../index";

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
      loading: false,
      logout(){
        return global.window.location.pathname = 'authentication'
      }
    };
  });
});

describe("Home Component", () => {
  
  it("should render correctly", () => {
    const teste = render(<Home />);
    expect(teste.getByText('Página Inicial')).toBeInTheDocument()
    expect(teste.getByText('Notificações')).toBeInTheDocument()
    expect(teste.getByText('Testando o layout')).toBeInTheDocument()
    expect(teste.getByText('Sair')).toBeInTheDocument()
    expect(teste.getByAltText('imagem do usuario')).toBeInTheDocument()
  });
  
  it('click to redirect', async() => {
    const teste = render(<Home />);
    const link = teste.getByText('Sair')
    expect(link).toBeInTheDocument()
    await userEvent.click(link)
    console.log(global.window.location.pathname);
  })
});

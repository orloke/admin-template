import { render } from "@testing-library/react";
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

describe("Layout component", () => {
  test("render correctly", () => {
    const screen = render(
      <Layout title="Pagina Inicial" caption="Testando o layout">
        Júnior Dering
      </Layout>
    );
    screen.debug();

  });
});

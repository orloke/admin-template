import { render, screen } from "@testing-library/react";
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
    const { getByText } = render(
      <Layout title="Pagina Inicial" caption="Testando o layout">
        Júnior Dering
      </Layout>
    );
  });
});

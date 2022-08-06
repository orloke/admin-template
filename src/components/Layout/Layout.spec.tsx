import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

jest.mock('next/router')



describe("Layout component", () => {
  test("render correctly", () => {
    const spyRouter = jest.spyOn(require("next/router").default, "push");
    const { getByText } = render(
      <Layout title="Pagina Inicial" caption="Testando o layout">
        Testando
      </Layout>
    );
  });
});

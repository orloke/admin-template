import { render, screen } from "@testing-library/react";
import Layout from "../../components/Layout/Layout";
import Title from "../../components/Title/Title";


jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        push: jest.fn(),
      };
    },
  };
});

describe("Home component", () => {
    function tree() {
        return render(
          <Layout title="home" caption="teste">
            <Title title="home" caption="teste"/>
          </Layout>
        )
      }
  test("render correctly", () => {
    screen.debug();
    expect(tree()).toMatchSnapshot();
    screen.logTestingPlaygroundURL()
  });
});

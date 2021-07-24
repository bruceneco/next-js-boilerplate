import { render, screen } from "@testing-library/react";
import Main from "./index";

describe("<Main/>", () => {
  it("render heading", () => {
    render(<Main />);
    expect(
      screen.queryByRole("heading", { name: /react project/i })
    ).toBeInTheDocument();
  });
});

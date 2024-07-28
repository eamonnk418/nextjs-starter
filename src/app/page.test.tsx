import Page from "@/app/page";
import "@testing-library/jest-dom";
import { render, RenderResult, screen } from "@testing-library/react";

describe("Page", () => {
  let page: RenderResult;

  beforeEach(() => {
    page = render(<Page />);
  });

  afterEach(() => {
    page.unmount();
  });

  it("renders a heading", () => {
    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    expect(page).toMatchSnapshot();
  });
});

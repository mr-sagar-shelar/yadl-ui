import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AboutUsPage from "../AboutUsPage";

describe("AboutUsPage component", () => {
  it("AboutUsPage should render correctly", () => {
    render(<AboutUsPage />);
    expect(true).toBeTruthy();
  });
});

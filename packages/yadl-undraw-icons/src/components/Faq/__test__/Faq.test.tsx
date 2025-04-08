import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Faq from "../Faq";

describe("Faq component", () => {
  it("Faq should render correctly", () => {
    render(<Faq />);
    expect(true).toBeTruthy();
  });
});

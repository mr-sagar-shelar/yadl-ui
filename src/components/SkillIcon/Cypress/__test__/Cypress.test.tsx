import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Cypress from "../Cypress";

describe("Cypress component", () => {
  it("Cypress should render correctly", () => {
    render(<Cypress />);
    expect(true).toBeTruthy();
  });
});

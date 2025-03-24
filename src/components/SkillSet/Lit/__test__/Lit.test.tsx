import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Lit from "../Lit";

describe("Lit component", () => {
  it("Lit should render correctly", () => {
    render(<Lit />);
    expect(true).toBeTruthy();
  });
});

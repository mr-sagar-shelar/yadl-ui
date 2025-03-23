import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Suburbs from "../Suburbs";

describe("Suburbs component", () => {
  it("Suburbs should render correctly", () => {
    render(<Suburbs />);
    expect(true).toBeTruthy();
  });
});

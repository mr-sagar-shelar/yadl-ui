import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AddInformation from "../AddInformation";

describe("AddInformation component", () => {
  it("AddInformation should render correctly", () => {
    render(<AddInformation />);
    expect(true).toBeTruthy();
  });
});

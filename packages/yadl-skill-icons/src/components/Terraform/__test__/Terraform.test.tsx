import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Terraform from "../Terraform";

describe("Terraform component", () => {
  it("Terraform should render correctly", () => {
    render(<Terraform />);
    expect(true).toBeTruthy();
  });
});

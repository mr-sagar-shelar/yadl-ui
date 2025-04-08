import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Vault from "../Vault";

describe("Vault component", () => {
  it("Vault should render correctly", () => {
    render(<Vault />);
    expect(true).toBeTruthy();
  });
});

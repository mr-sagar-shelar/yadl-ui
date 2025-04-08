import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureProgrammableConnectivity from "../AzureProgrammableConnectivity";

describe("AzureProgrammableConnectivity component", () => {
  it("AzureProgrammableConnectivity should render correctly", () => {
    render(<AzureProgrammableConnectivity />);
    expect(true).toBeTruthy();
  });
});

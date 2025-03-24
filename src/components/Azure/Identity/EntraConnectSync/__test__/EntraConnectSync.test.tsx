import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EntraConnectSync from "../EntraConnectSync";

describe("EntraConnectSync component", () => {
  it("EntraConnectSync should render correctly", () => {
    render(<EntraConnectSync />);
    expect(true).toBeTruthy();
  });
});

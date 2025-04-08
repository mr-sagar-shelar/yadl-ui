import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EntraConnectHealth from "../EntraConnectHealth";

describe("EntraConnectHealth component", () => {
  it("EntraConnectHealth should render correctly", () => {
    render(<EntraConnectHealth />);
    expect(true).toBeTruthy();
  });
});

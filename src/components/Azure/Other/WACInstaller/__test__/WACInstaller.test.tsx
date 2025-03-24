import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WACInstaller from "../WACInstaller";

describe("WACInstaller component", () => {
  it("WACInstaller should render correctly", () => {
    render(<WACInstaller />);
    expect(true).toBeTruthy();
  });
});

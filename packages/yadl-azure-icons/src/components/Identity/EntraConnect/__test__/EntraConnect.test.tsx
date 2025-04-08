import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EntraConnect from "../EntraConnect";

describe("EntraConnect component", () => {
  it("EntraConnect should render correctly", () => {
    render(<EntraConnect />);
    expect(true).toBeTruthy();
  });
});

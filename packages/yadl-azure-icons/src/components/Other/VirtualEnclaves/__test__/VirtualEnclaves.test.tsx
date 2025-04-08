import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VirtualEnclaves from "../VirtualEnclaves";

describe("VirtualEnclaves component", () => {
  it("VirtualEnclaves should render correctly", () => {
    render(<VirtualEnclaves />);
    expect(true).toBeTruthy();
  });
});

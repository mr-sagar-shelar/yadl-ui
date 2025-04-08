import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VIM from "../VIM";

describe("VIM component", () => {
  it("VIM should render correctly", () => {
    render(<VIM />);
    expect(true).toBeTruthy();
  });
});

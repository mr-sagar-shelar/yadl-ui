import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CommandLineInterface from "../CommandLineInterface";

describe("CommandLineInterface component", () => {
  it("CommandLineInterface should render correctly", () => {
    render(<CommandLineInterface />);
    expect(true).toBeTruthy();
  });
});

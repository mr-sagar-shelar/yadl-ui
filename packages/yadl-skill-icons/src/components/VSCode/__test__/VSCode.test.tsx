import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VSCode from "../VSCode";

describe("VSCode component", () => {
  it("VSCode should render correctly", () => {
    render(<VSCode />);
    expect(true).toBeTruthy();
  });
});

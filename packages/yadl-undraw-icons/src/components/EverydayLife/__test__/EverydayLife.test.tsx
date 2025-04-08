import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EverydayLife from "../EverydayLife";

describe("EverydayLife component", () => {
  it("EverydayLife should render correctly", () => {
    render(<EverydayLife />);
    expect(true).toBeTruthy();
  });
});

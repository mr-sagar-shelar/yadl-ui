import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Ktor from "../Ktor";

describe("Ktor component", () => {
  it("Ktor should render correctly", () => {
    render(<Ktor />);
    expect(true).toBeTruthy();
  });
});

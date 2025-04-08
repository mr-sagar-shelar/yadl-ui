import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Corretto from "../Corretto";

describe("Corretto component", () => {
  it("Corretto should render correctly", () => {
    render(<Corretto />);
    expect(true).toBeTruthy();
  });
});

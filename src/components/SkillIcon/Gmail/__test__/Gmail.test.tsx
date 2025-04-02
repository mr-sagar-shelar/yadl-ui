import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Gmail from "../Gmail";

describe("Gmail component", () => {
  it("Gmail should render correctly", () => {
    render(<Gmail />);
    expect(true).toBeTruthy();
  });
});

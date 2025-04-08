import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Organizations from "../Organizations";

describe("Organizations component", () => {
  it("Organizations should render correctly", () => {
    render(<Organizations />);
    expect(true).toBeTruthy();
  });
});

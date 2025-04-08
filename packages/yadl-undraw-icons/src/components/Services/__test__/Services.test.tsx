import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Services from "../Services";

describe("Services component", () => {
  it("Services should render correctly", () => {
    render(<Services />);
    expect(true).toBeTruthy();
  });
});

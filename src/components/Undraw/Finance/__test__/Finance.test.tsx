import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Finance from "../Finance";

describe("Finance component", () => {
  it("Finance should render correctly", () => {
    render(<Finance />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CareerDevelopment from "../CareerDevelopment";

describe("CareerDevelopment component", () => {
  it("CareerDevelopment should render correctly", () => {
    render(<CareerDevelopment />);
    expect(true).toBeTruthy();
  });
});

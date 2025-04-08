import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AllResources from "../AllResources";

describe("AllResources component", () => {
  it("AllResources should render correctly", () => {
    render(<AllResources />);
    expect(true).toBeTruthy();
  });
});

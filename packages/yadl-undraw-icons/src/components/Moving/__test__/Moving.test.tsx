import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Moving from "../Moving";

describe("Moving component", () => {
  it("Moving should render correctly", () => {
    render(<Moving />);
    expect(true).toBeTruthy();
  });
});

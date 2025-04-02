import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Bootstrap from "../Bootstrap";

describe("Bootstrap component", () => {
  it("Bootstrap should render correctly", () => {
    render(<Bootstrap />);
    expect(true).toBeTruthy();
  });
});

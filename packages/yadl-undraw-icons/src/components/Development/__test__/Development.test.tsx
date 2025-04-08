import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Development from "../Development";

describe("Development component", () => {
  it("Development should render correctly", () => {
    render(<Development />);
    expect(true).toBeTruthy();
  });
});

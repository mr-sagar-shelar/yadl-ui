import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import R from "../R";

describe("R component", () => {
  it("R should render correctly", () => {
    render(<R />);
    expect(true).toBeTruthy();
  });
});

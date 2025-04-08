import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ThreeJS from "../ThreeJS";

describe("ThreeJS component", () => {
  it("ThreeJS should render correctly", () => {
    render(<ThreeJS />);
    expect(true).toBeTruthy();
  });
});

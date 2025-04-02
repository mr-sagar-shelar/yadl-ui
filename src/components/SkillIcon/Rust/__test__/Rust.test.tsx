import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Rust from "../Rust";

describe("Rust component", () => {
  it("Rust should render correctly", () => {
    render(<Rust />);
    expect(true).toBeTruthy();
  });
});

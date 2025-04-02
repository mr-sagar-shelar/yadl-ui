import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Java from "../Java";

describe("Java component", () => {
  it("Java should render correctly", () => {
    render(<Java />);
    expect(true).toBeTruthy();
  });
});

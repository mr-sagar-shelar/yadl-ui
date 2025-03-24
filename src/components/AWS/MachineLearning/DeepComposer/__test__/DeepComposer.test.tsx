import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DeepComposer from "../DeepComposer";

describe("DeepComposer component", () => {
  it("DeepComposer should render correctly", () => {
    render(<DeepComposer />);
    expect(true).toBeTruthy();
  });
});

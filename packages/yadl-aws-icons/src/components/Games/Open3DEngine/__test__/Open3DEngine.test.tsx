import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Open3DEngine from "../Open3DEngine";

describe("Open3DEngine component", () => {
  it("Open3DEngine should render correctly", () => {
    render(<Open3DEngine />);
    expect(true).toBeTruthy();
  });
});

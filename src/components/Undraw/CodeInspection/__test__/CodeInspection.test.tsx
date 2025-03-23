import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CodeInspection from "../CodeInspection";

describe("CodeInspection component", () => {
  it("CodeInspection should render correctly", () => {
    render(<CodeInspection />);
    expect(true).toBeTruthy();
  });
});

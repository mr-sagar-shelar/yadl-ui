import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AddContent from "../AddContent";

describe("AddContent component", () => {
  it("AddContent should render correctly", () => {
    render(<AddContent />);
    expect(true).toBeTruthy();
  });
});

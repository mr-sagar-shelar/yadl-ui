import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import InSync from "../InSync";

describe("InSync component", () => {
  it("InSync should render correctly", () => {
    render(<InSync />);
    expect(true).toBeTruthy();
  });
});

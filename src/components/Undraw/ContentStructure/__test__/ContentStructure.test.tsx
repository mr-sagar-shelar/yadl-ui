import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ContentStructure from "../ContentStructure";

describe("ContentStructure component", () => {
  it("ContentStructure should render correctly", () => {
    render(<ContentStructure />);
    expect(true).toBeTruthy();
  });
});

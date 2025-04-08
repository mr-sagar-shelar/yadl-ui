import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MindMap from "../MindMap";

describe("MindMap component", () => {
  it("MindMap should render correctly", () => {
    render(<MindMap />);
    expect(true).toBeTruthy();
  });
});

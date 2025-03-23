import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Collection from "../Collection";

describe("Collection component", () => {
  it("Collection should render correctly", () => {
    render(<Collection />);
    expect(true).toBeTruthy();
  });
});

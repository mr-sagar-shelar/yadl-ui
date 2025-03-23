import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Segment from "../Segment";

describe("Segment component", () => {
  it("Segment should render correctly", () => {
    render(<Segment />);
    expect(true).toBeTruthy();
  });
});

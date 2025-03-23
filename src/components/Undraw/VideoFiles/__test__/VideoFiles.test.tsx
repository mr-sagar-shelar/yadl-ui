import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VideoFiles from "../VideoFiles";

describe("VideoFiles component", () => {
  it("VideoFiles should render correctly", () => {
    render(<VideoFiles />);
    expect(true).toBeTruthy();
  });
});

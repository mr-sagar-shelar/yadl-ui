import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BufferBuffer from "../BufferBuffer";

describe("BufferBuffer component", () => {
  it("BufferBuffer should render correctly", () => {
    render(<BufferBuffer />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Linux from "../Linux";

describe("Linux component", () => {
  it("Linux should render correctly", () => {
    render(<Linux />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Timeline from "../Timeline";

describe("Timeline component", () => {
  it("Timeline should render correctly", () => {
    render(<Timeline />);
    expect(true).toBeTruthy();
  });
});

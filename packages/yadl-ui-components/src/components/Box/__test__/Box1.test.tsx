import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Box from "../Box1";

describe("Box component", () => {
  it("Box should render correctly", () => {
    render(<Box title={"Hello"} number="02" icon="test" caption="caption" />);
    expect(true).toBeTruthy();
  });
});

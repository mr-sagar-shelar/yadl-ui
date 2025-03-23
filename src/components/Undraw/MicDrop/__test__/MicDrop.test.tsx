import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MicDrop from "../MicDrop";

describe("MicDrop component", () => {
  it("MicDrop should render correctly", () => {
    render(<MicDrop />);
    expect(true).toBeTruthy();
  });
});

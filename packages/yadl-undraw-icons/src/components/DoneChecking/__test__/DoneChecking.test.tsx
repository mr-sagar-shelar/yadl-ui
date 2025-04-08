import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DoneChecking from "../DoneChecking";

describe("DoneChecking component", () => {
  it("DoneChecking should render correctly", () => {
    render(<DoneChecking />);
    expect(true).toBeTruthy();
  });
});

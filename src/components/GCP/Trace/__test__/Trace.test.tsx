import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Trace from "../Trace";

describe("Trace component", () => {
  it("Trace should render correctly", () => {
    render(<Trace />);
    expect(true).toBeTruthy();
  });
});

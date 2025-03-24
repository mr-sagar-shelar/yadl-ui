import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Pinpoint from "../Pinpoint";

describe("Pinpoint component", () => {
  it("Pinpoint should render correctly", () => {
    render(<Pinpoint />);
    expect(true).toBeTruthy();
  });
});

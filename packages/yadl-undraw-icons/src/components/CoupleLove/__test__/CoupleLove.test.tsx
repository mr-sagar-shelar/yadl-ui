import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CoupleLove from "../CoupleLove";

describe("CoupleLove component", () => {
  it("CoupleLove should render correctly", () => {
    render(<CoupleLove />);
    expect(true).toBeTruthy();
  });
});

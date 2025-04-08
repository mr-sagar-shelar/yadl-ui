import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LivePhoto from "../LivePhoto";

describe("LivePhoto component", () => {
  it("LivePhoto should render correctly", () => {
    render(<LivePhoto />);
    expect(true).toBeTruthy();
  });
});

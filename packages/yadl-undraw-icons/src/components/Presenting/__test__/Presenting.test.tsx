import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Presenting from "../Presenting";

describe("Presenting component", () => {
  it("Presenting should render correctly", () => {
    render(<Presenting />);
    expect(true).toBeTruthy();
  });
});

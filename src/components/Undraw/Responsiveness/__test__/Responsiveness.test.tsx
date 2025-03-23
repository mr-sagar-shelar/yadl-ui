import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Responsiveness from "../Responsiveness";

describe("Responsiveness component", () => {
  it("Responsiveness should render correctly", () => {
    render(<Responsiveness />);
    expect(true).toBeTruthy();
  });
});

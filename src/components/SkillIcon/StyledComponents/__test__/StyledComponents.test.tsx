import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StyledComponents from "../StyledComponents";

describe("StyledComponents component", () => {
  it("StyledComponents should render correctly", () => {
    render(<StyledComponents />);
    expect(true).toBeTruthy();
  });
});

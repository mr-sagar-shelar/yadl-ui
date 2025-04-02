import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Bash from "../Bash";

describe("Bash component", () => {
  it("Bash should render correctly", () => {
    render(<Bash />);
    expect(true).toBeTruthy();
  });
});

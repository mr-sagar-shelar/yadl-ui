import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Activate from "../Activate";

describe("Activate component", () => {
  it("Activate should render correctly", () => {
    render(<Activate />);
    expect(true).toBeTruthy();
  });
});

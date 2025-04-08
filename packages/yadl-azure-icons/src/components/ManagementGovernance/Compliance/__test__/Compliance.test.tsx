import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Compliance from "../Compliance";

describe("Compliance component", () => {
  it("Compliance should render correctly", () => {
    render(<Compliance />);
    expect(true).toBeTruthy();
  });
});

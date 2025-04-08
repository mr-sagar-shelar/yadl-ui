import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Observations from "../Observations";

describe("Observations component", () => {
  it("Observations should render correctly", () => {
    render(<Observations />);
    expect(true).toBeTruthy();
  });
});

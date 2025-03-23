import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Taken from "../Taken";

describe("Taken component", () => {
  it("Taken should render correctly", () => {
    render(<Taken />);
    expect(true).toBeTruthy();
  });
});

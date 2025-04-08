import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Vintage from "../Vintage";

describe("Vintage component", () => {
  it("Vintage should render correctly", () => {
    render(<Vintage />);
    expect(true).toBeTruthy();
  });
});

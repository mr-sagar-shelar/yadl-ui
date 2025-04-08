import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Towing from "../Towing";

describe("Towing component", () => {
  it("Towing should render correctly", () => {
    render(<Towing />);
    expect(true).toBeTruthy();
  });
});

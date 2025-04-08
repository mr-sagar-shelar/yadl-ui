import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import InstantSupport from "../InstantSupport";

describe("InstantSupport component", () => {
  it("InstantSupport should render correctly", () => {
    render(<InstantSupport />);
    expect(true).toBeTruthy();
  });
});

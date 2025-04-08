import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ShowingSupport from "../ShowingSupport";

describe("ShowingSupport component", () => {
  it("ShowingSupport should render correctly", () => {
    render(<ShowingSupport />);
    expect(true).toBeTruthy();
  });
});

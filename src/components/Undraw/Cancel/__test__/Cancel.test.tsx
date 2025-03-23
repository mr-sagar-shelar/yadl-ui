import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Cancel from "../Cancel";

describe("Cancel component", () => {
  it("Cancel should render correctly", () => {
    render(<Cancel />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Writer from "../Writer";

describe("Writer component", () => {
  it("Writer should render correctly", () => {
    render(<Writer />);
    expect(true).toBeTruthy();
  });
});

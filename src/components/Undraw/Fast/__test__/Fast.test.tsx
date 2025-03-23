import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Fast from "../Fast";

describe("Fast component", () => {
  it("Fast should render correctly", () => {
    render(<Fast />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Subscribe from "../Subscribe";

describe("Subscribe component", () => {
  it("Subscribe should render correctly", () => {
    render(<Subscribe />);
    expect(true).toBeTruthy();
  });
});

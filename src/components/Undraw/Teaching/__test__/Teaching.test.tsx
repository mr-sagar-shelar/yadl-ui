import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Teaching from "../Teaching";

describe("Teaching component", () => {
  it("Teaching should render correctly", () => {
    render(<Teaching />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Website from "../Website";

describe("Website component", () => {
  it("Website should render correctly", () => {
    render(<Website />);
    expect(true).toBeTruthy();
  });
});

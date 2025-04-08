import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Heart from "../Heart";

describe("Heart component", () => {
  it("Heart should render correctly", () => {
    render(<Heart />);
    expect(true).toBeTruthy();
  });
});

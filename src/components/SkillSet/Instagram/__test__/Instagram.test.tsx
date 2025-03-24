import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Instagram from "../Instagram";

describe("Instagram component", () => {
  it("Instagram should render correctly", () => {
    render(<Instagram />);
    expect(true).toBeTruthy();
  });
});

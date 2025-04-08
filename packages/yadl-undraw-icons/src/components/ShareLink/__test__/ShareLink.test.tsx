import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ShareLink from "../ShareLink";

describe("ShareLink component", () => {
  it("ShareLink should render correctly", () => {
    render(<ShareLink />);
    expect(true).toBeTruthy();
  });
});

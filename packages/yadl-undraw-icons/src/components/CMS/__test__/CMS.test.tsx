import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CMS from "../CMS";

describe("CMS component", () => {
  it("CMS should render correctly", () => {
    render(<CMS />);
    expect(true).toBeTruthy();
  });
});

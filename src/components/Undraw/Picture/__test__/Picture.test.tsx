import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Picture from "../Picture";

describe("Picture component", () => {
  it("Picture should render correctly", () => {
    render(<Picture />);
    expect(true).toBeTruthy();
  });
});

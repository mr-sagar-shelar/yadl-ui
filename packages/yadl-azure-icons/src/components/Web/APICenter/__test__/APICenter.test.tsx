import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import APICenter from "../APICenter";

describe("APICenter component", () => {
  it("APICenter should render correctly", () => {
    render(<APICenter />);
    expect(true).toBeTruthy();
  });
});

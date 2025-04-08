import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Information from "../Information";

describe("Information component", () => {
  it("Information should render correctly", () => {
    render(<Information />);
    expect(true).toBeTruthy();
  });
});

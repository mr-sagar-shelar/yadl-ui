import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Convert from "../Convert";

describe("Convert component", () => {
  it("Convert should render correctly", () => {
    render(<Convert />);
    expect(true).toBeTruthy();
  });
});

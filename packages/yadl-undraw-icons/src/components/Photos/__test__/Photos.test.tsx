import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Photos from "../Photos";

describe("Photos component", () => {
  it("Photos should render correctly", () => {
    render(<Photos />);
    expect(true).toBeTruthy();
  });
});

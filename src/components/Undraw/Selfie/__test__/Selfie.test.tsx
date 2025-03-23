import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Selfie from "../Selfie";

describe("Selfie component", () => {
  it("Selfie should render correctly", () => {
    render(<Selfie />);
    expect(true).toBeTruthy();
  });
});

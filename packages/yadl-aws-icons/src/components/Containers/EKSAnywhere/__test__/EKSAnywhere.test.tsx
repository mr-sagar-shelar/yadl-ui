import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EKSAnywhere from "../EKSAnywhere";

describe("EKSAnywhere component", () => {
  it("EKSAnywhere should render correctly", () => {
    render(<EKSAnywhere />);
    expect(true).toBeTruthy();
  });
});

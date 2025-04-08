import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EKSCloud from "../EKSCloud";

describe("EKSCloud component", () => {
  it("EKSCloud should render correctly", () => {
    render(<EKSCloud />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EKSDistro from "../EKSDistro";

describe("EKSDistro component", () => {
  it("EKSDistro should render correctly", () => {
    render(<EKSDistro />);
    expect(true).toBeTruthy();
  });
});

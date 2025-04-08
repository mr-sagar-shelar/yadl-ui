import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Certification from "../Certification";

describe("Certification component", () => {
  it("Certification should render correctly", () => {
    render(<Certification />);
    expect(true).toBeTruthy();
  });
});

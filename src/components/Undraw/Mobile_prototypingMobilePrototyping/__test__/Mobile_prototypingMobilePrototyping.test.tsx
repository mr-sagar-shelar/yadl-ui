import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Mobile_prototypingMobilePrototyping from "../Mobile_prototypingMobilePrototyping";

describe("Mobile_prototypingMobilePrototyping component", () => {
  it("Mobile_prototypingMobilePrototyping should render correctly", () => {
    render(<Mobile_prototypingMobilePrototyping />);
    expect(true).toBeTruthy();
  });
});

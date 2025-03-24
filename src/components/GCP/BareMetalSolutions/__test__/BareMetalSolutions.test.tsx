import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BareMetalSolutions from "../BareMetalSolutions";

describe("BareMetalSolutions component", () => {
  it("BareMetalSolutions should render correctly", () => {
    render(<BareMetalSolutions />);
    expect(true).toBeTruthy();
  });
});

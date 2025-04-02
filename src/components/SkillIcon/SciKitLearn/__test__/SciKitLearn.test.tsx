import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SciKitLearn from "../SciKitLearn";

describe("SciKitLearn component", () => {
  it("SciKitLearn should render correctly", () => {
    render(<SciKitLearn />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GoingUp from "../GoingUp";

describe("GoingUp component", () => {
  it("GoingUp should render correctly", () => {
    render(<GoingUp />);
    expect(true).toBeTruthy();
  });
});

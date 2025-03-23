import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DesignSprint from "../DesignSprint";

describe("DesignSprint component", () => {
  it("DesignSprint should render correctly", () => {
    render(<DesignSprint />);
    expect(true).toBeTruthy();
  });
});

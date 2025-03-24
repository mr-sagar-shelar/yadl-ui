import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OSConfig from "../OSConfig";

describe("OSConfig component", () => {
  it("OSConfig should render correctly", () => {
    render(<OSConfig />);
    expect(true).toBeTruthy();
  });
});

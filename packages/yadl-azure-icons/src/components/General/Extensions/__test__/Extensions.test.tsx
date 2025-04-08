import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Extensions from "../Extensions";

describe("Extensions component", () => {
  it("Extensions should render correctly", () => {
    render(<Extensions />);
    expect(true).toBeTruthy();
  });
});

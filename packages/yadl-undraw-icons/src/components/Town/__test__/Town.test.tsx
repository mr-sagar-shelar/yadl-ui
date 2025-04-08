import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Town from "../Town";

describe("Town component", () => {
  it("Town should render correctly", () => {
    render(<Town />);
    expect(true).toBeTruthy();
  });
});

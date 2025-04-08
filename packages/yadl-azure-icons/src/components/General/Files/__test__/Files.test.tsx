import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Files from "../Files";

describe("Files component", () => {
  it("Files should render correctly", () => {
    render(<Files />);
    expect(true).toBeTruthy();
  });
});

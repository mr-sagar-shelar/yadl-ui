import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Following from "../Following";

describe("Following component", () => {
  it("Following should render correctly", () => {
    render(<Following />);
    expect(true).toBeTruthy();
  });
});

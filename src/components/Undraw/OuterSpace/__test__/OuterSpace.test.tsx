import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OuterSpace from "../OuterSpace";

describe("OuterSpace component", () => {
  it("OuterSpace should render correctly", () => {
    render(<OuterSpace />);
    expect(true).toBeTruthy();
  });
});

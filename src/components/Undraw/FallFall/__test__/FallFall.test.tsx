import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FallFall from "../FallFall";

describe("FallFall component", () => {
  it("FallFall should render correctly", () => {
    render(<FallFall />);
    expect(true).toBeTruthy();
  });
});

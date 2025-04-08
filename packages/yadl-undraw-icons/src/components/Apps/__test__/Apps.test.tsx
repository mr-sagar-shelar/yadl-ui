import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Apps from "../Apps";

describe("Apps component", () => {
  it("Apps should render correctly", () => {
    render(<Apps />);
    expect(true).toBeTruthy();
  });
});

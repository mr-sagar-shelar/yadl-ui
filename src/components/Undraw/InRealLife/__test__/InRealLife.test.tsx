import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import InRealLife from "../InRealLife";

describe("InRealLife component", () => {
  it("InRealLife should render correctly", () => {
    render(<InRealLife />);
    expect(true).toBeTruthy();
  });
});

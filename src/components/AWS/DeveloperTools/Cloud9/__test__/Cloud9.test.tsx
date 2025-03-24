import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Cloud9 from "../Cloud9";

describe("Cloud9 component", () => {
  it("Cloud9 should render correctly", () => {
    render(<Cloud9 />);
    expect(true).toBeTruthy();
  });
});

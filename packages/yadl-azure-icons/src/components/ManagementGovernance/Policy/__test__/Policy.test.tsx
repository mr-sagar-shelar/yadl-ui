import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Policy from "../Policy";

describe("Policy component", () => {
  it("Policy should render correctly", () => {
    render(<Policy />);
    expect(true).toBeTruthy();
  });
});

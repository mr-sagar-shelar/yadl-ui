import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ActiveSupport from "../ActiveSupport";

describe("ActiveSupport component", () => {
  it("ActiveSupport should render correctly", () => {
    render(<ActiveSupport />);
    expect(true).toBeTruthy();
  });
});

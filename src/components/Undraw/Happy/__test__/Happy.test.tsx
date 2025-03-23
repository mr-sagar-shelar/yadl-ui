import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Happy from "../Happy";

describe("Happy component", () => {
  it("Happy should render correctly", () => {
    render(<Happy />);
    expect(true).toBeTruthy();
  });
});

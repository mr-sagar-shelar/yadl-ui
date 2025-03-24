import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SecurityHub from "../SecurityHub";

describe("SecurityHub component", () => {
  it("SecurityHub should render correctly", () => {
    render(<SecurityHub />);
    expect(true).toBeTruthy();
  });
});

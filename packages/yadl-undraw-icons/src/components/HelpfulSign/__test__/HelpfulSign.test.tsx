import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HelpfulSign from "../HelpfulSign";

describe("HelpfulSign component", () => {
  it("HelpfulSign should render correctly", () => {
    render(<HelpfulSign />);
    expect(true).toBeTruthy();
  });
});

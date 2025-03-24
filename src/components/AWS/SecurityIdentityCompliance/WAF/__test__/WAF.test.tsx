import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WAF from "../WAF";

describe("WAF component", () => {
  it("WAF should render correctly", () => {
    render(<WAF />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Mail from "../Mail";

describe("Mail component", () => {
  it("Mail should render correctly", () => {
    render(<Mail />);
    expect(true).toBeTruthy();
  });
});

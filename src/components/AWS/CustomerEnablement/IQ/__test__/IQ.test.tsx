import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IQ from "../IQ";

describe("IQ component", () => {
  it("IQ should render correctly", () => {
    render(<IQ />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Programming from "../Programming";

describe("Programming component", () => {
  it("Programming should render correctly", () => {
    render(<Programming />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Choice from "../Choice";

describe("Choice component", () => {
  it("Choice should render correctly", () => {
    render(<Choice />);
    expect(true).toBeTruthy();
  });
});

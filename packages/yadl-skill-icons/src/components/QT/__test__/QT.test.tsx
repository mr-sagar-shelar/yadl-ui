import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import QT from "../QT";

describe("QT component", () => {
  it("QT should render correctly", () => {
    render(<QT />);
    expect(true).toBeTruthy();
  });
});

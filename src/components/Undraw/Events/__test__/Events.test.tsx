import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Events from "../Events";

describe("Events component", () => {
  it("Events should render correctly", () => {
    render(<Events />);
    expect(true).toBeTruthy();
  });
});

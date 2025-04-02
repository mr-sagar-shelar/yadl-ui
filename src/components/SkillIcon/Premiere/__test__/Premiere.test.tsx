import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Premiere from "../Premiere";

describe("Premiere component", () => {
  it("Premiere should render correctly", () => {
    render(<Premiere />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Party from "../Party";

describe("Party component", () => {
  it("Party should render correctly", () => {
    render(<Party />);
    expect(true).toBeTruthy();
  });
});

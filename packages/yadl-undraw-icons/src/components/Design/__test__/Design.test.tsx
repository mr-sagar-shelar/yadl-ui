import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Design from "../Design";

describe("Design component", () => {
  it("Design should render correctly", () => {
    render(<Design />);
    expect(true).toBeTruthy();
  });
});

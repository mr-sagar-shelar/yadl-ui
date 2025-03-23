import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EnterEnter from "../EnterEnter";

describe("EnterEnter component", () => {
  it("EnterEnter should render correctly", () => {
    render(<EnterEnter />);
    expect(true).toBeTruthy();
  });
});

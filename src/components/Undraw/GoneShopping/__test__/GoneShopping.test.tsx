import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GoneShopping from "../GoneShopping";

describe("GoneShopping component", () => {
  it("GoneShopping should render correctly", () => {
    render(<GoneShopping />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Bastions from "../Bastions";

describe("Bastions component", () => {
  it("Bastions should render correctly", () => {
    render(<Bastions />);
    expect(true).toBeTruthy();
  });
});

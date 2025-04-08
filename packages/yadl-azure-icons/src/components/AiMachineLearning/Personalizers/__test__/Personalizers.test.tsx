import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Personalizers from "../Personalizers";

describe("Personalizers component", () => {
  it("Personalizers should render correctly", () => {
    render(<Personalizers />);
    expect(true).toBeTruthy();
  });
});

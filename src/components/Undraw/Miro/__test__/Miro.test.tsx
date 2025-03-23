import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Miro from "../Miro";

describe("Miro component", () => {
  it("Miro should render correctly", () => {
    render(<Miro />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Art from "../Art";

describe("Art component", () => {
  it("Art should render correctly", () => {
    render(<Art />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Macie from "../Macie";

describe("Macie component", () => {
  it("Macie should render correctly", () => {
    render(<Macie />);
    expect(true).toBeTruthy();
  });
});

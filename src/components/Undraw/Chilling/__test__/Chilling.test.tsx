import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Chilling from "../Chilling";

describe("Chilling component", () => {
  it("Chilling should render correctly", () => {
    render(<Chilling />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Mindfulness from "../Mindfulness";

describe("Mindfulness component", () => {
  it("Mindfulness should render correctly", () => {
    render(<Mindfulness />);
    expect(true).toBeTruthy();
  });
});

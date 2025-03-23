import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Tasting from "../Tasting";

describe("Tasting component", () => {
  it("Tasting should render correctly", () => {
    render(<Tasting />);
    expect(true).toBeTruthy();
  });
});

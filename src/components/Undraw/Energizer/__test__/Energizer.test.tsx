import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Energizer from "../Energizer";

describe("Energizer component", () => {
  it("Energizer should render correctly", () => {
    render(<Energizer />);
    expect(true).toBeTruthy();
  });
});

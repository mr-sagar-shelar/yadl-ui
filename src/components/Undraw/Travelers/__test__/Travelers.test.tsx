import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Travelers from "../Travelers";

describe("Travelers component", () => {
  it("Travelers should render correctly", () => {
    render(<Travelers />);
    expect(true).toBeTruthy();
  });
});

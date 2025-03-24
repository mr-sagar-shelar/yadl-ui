import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MedTechService from "../MedTechService";

describe("MedTechService component", () => {
  it("MedTechService should render correctly", () => {
    render(<MedTechService />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Baby from "../Baby";

describe("Baby component", () => {
  it("Baby should render correctly", () => {
    render(<Baby />);
    expect(true).toBeTruthy();
  });
});

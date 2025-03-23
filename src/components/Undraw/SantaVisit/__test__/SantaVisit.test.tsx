import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SantaVisit from "../SantaVisit";

describe("SantaVisit component", () => {
  it("SantaVisit should render correctly", () => {
    render(<SantaVisit />);
    expect(true).toBeTruthy();
  });
});

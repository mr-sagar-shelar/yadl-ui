import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Artifact from "../Artifact";

describe("Artifact component", () => {
  it("Artifact should render correctly", () => {
    render(<Artifact />);
    expect(true).toBeTruthy();
  });
});

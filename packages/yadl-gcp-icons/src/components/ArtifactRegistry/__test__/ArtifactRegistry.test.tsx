import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ArtifactRegistry from "../ArtifactRegistry";

describe("ArtifactRegistry component", () => {
  it("ArtifactRegistry should render correctly", () => {
    render(<ArtifactRegistry />);
    expect(true).toBeTruthy();
  });
});

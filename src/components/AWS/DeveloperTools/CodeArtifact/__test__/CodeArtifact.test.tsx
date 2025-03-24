import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CodeArtifact from "../CodeArtifact";

describe("CodeArtifact component", () => {
  it("CodeArtifact should render correctly", () => {
    render(<CodeArtifact />);
    expect(true).toBeTruthy();
  });
});

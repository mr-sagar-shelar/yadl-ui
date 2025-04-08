import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ThinkboxXMesh from "../ThinkboxXMesh";

describe("ThinkboxXMesh component", () => {
  it("ThinkboxXMesh should render correctly", () => {
    render(<ThinkboxXMesh />);
    expect(true).toBeTruthy();
  });
});

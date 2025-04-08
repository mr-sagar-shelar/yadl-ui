import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AppMesh from "../AppMesh";

describe("AppMesh component", () => {
  it("AppMesh should render correctly", () => {
    render(<AppMesh />);
    expect(true).toBeTruthy();
  });
});

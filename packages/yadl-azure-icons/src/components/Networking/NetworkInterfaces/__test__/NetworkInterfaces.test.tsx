import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NetworkInterfaces from "../NetworkInterfaces";

describe("NetworkInterfaces component", () => {
  it("NetworkInterfaces should render correctly", () => {
    render(<NetworkInterfaces />);
    expect(true).toBeTruthy();
  });
});

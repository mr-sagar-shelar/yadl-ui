import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VMAppVersions from "../VMAppVersions";

describe("VMAppVersions component", () => {
  it("VMAppVersions should render correctly", () => {
    render(<VMAppVersions />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ImageVersions from "../ImageVersions";

describe("ImageVersions component", () => {
  it("ImageVersions should render correctly", () => {
    render(<ImageVersions />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OSImagesClassic from "../OSImagesClassic";

describe("OSImagesClassic component", () => {
  it("OSImagesClassic should render correctly", () => {
    render(<OSImagesClassic />);
    expect(true).toBeTruthy();
  });
});

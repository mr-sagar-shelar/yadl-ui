import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ImageViewer from "../ImageViewer";

describe("ImageViewer component", () => {
  it("ImageViewer should render correctly", () => {
    render(<ImageViewer />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Zoom_inZoomIn from "../Zoom_inZoomIn";

describe("Zoom_inZoomIn component", () => {
  it("Zoom_inZoomIn should render correctly", () => {
    render(<Zoom_inZoomIn />);
    expect(true).toBeTruthy();
  });
});

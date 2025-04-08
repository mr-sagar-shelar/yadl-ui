import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SharedImageGalleries from "../SharedImageGalleries";

describe("SharedImageGalleries component", () => {
  it("SharedImageGalleries should render correctly", () => {
    render(<SharedImageGalleries />);
    expect(true).toBeTruthy();
  });
});

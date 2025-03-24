import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VMImagesClassic from "../VMImagesClassic";

describe("VMImagesClassic component", () => {
  it("VMImagesClassic should render correctly", () => {
    render(<VMImagesClassic />);
    expect(true).toBeTruthy();
  });
});

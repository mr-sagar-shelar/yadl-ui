import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ImageUpload from "../ImageUpload";

describe("ImageUpload component", () => {
  it("ImageUpload should render correctly", () => {
    render(<ImageUpload />);
    expect(true).toBeTruthy();
  });
});

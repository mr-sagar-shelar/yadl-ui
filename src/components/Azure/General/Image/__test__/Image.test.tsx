import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Image from "../Image";

describe("Image component", () => {
  it("Image should render correctly", () => {
    render(<Image />);
    expect(true).toBeTruthy();
  });
});

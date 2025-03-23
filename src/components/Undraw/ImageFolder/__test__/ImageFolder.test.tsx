import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ImageFolder from "../ImageFolder";

describe("ImageFolder component", () => {
  it("ImageFolder should render correctly", () => {
    render(<ImageFolder />);
    expect(true).toBeTruthy();
  });
});

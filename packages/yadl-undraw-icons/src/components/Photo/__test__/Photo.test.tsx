import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Photo from "../Photo";

describe("Photo component", () => {
  it("Photo should render correctly", () => {
    render(<Photo />);
    expect(true).toBeTruthy();
  });
});

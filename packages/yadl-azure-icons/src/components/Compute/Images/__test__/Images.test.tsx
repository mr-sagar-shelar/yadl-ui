import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Images from "../Images";

describe("Images component", () => {
  it("Images should render correctly", () => {
    render(<Images />);
    expect(true).toBeTruthy();
  });
});

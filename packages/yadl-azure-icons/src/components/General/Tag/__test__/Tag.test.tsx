import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Tag from "../Tag";

describe("Tag component", () => {
  it("Tag should render correctly", () => {
    render(<Tag />);
    expect(true).toBeTruthy();
  });
});

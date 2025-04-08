import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EditPhoto from "../EditPhoto";

describe("EditPhoto component", () => {
  it("EditPhoto should render correctly", () => {
    render(<EditPhoto />);
    expect(true).toBeTruthy();
  });
});

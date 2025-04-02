import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Blender from "../Blender";

describe("Blender component", () => {
  it("Blender should render correctly", () => {
    render(<Blender />);
    expect(true).toBeTruthy();
  });
});

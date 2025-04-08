import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Unity from "../Unity";

describe("Unity component", () => {
  it("Unity should render correctly", () => {
    render(<Unity />);
    expect(true).toBeTruthy();
  });
});

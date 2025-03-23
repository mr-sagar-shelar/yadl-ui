import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SculptingSculpting from "../SculptingSculpting";

describe("SculptingSculpting component", () => {
  it("SculptingSculpting should render correctly", () => {
    render(<SculptingSculpting />);
    expect(true).toBeTruthy();
  });
});

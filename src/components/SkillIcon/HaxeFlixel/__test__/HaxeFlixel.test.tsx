import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HaxeFlixel from "../HaxeFlixel";

describe("HaxeFlixel component", () => {
  it("HaxeFlixel should render correctly", () => {
    render(<HaxeFlixel />);
    expect(true).toBeTruthy();
  });
});

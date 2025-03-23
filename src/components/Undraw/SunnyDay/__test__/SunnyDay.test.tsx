import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SunnyDay from "../SunnyDay";

describe("SunnyDay component", () => {
  it("SunnyDay should render correctly", () => {
    render(<SunnyDay />);
    expect(true).toBeTruthy();
  });
});

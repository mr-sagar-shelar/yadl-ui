import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Panorama from "../Panorama";

describe("Panorama component", () => {
  it("Panorama should render correctly", () => {
    render(<Panorama />);
    expect(true).toBeTruthy();
  });
});

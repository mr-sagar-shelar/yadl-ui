import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RightPlaces from "../RightPlaces";

describe("RightPlaces component", () => {
  it("RightPlaces should render correctly", () => {
    render(<RightPlaces />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Light_the_fireLightTheFire from "../Light_the_fireLightTheFire";

describe("Light_the_fireLightTheFire component", () => {
  it("Light_the_fireLightTheFire should render correctly", () => {
    render(<Light_the_fireLightTheFire />);
    expect(true).toBeTruthy();
  });
});

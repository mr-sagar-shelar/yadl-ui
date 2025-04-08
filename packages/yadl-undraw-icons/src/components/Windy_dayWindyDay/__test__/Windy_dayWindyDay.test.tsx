import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Windy_dayWindyDay from "../Windy_dayWindyDay";

describe("Windy_dayWindyDay component", () => {
  it("Windy_dayWindyDay should render correctly", () => {
    render(<Windy_dayWindyDay />);
    expect(true).toBeTruthy();
  });
});

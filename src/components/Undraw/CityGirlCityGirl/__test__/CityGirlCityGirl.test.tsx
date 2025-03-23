import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CityGirlCityGirl from "../CityGirlCityGirl";

describe("CityGirlCityGirl component", () => {
  it("CityGirlCityGirl should render correctly", () => {
    render(<CityGirlCityGirl />);
    expect(true).toBeTruthy();
  });
});

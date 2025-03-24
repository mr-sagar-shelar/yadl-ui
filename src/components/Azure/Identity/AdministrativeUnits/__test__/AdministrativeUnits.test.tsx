import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AdministrativeUnits from "../AdministrativeUnits";

describe("AdministrativeUnits component", () => {
  it("AdministrativeUnits should render correctly", () => {
    render(<AdministrativeUnits />);
    expect(true).toBeTruthy();
  });
});

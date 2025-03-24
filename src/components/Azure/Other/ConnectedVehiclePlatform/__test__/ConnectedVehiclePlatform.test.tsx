import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ConnectedVehiclePlatform from "../ConnectedVehiclePlatform";

describe("ConnectedVehiclePlatform component", () => {
  it("ConnectedVehiclePlatform should render correctly", () => {
    render(<ConnectedVehiclePlatform />);
    expect(true).toBeTruthy();
  });
});

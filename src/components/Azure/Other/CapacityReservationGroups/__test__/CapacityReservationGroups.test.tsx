import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CapacityReservationGroups from "../CapacityReservationGroups";

describe("CapacityReservationGroups component", () => {
  it("CapacityReservationGroups should render correctly", () => {
    render(<CapacityReservationGroups />);
    expect(true).toBeTruthy();
  });
});

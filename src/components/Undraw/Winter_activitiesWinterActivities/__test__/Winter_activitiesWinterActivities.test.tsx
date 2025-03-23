import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Winter_activitiesWinterActivities from "../Winter_activitiesWinterActivities";

describe("Winter_activitiesWinterActivities component", () => {
  it("Winter_activitiesWinterActivities should render correctly", () => {
    render(<Winter_activitiesWinterActivities />);
    expect(true).toBeTruthy();
  });
});

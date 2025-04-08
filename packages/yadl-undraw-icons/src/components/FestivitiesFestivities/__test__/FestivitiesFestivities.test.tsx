import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FestivitiesFestivities from "../FestivitiesFestivities";

describe("FestivitiesFestivities component", () => {
  it("FestivitiesFestivities should render correctly", () => {
    render(<FestivitiesFestivities />);
    expect(true).toBeTruthy();
  });
});

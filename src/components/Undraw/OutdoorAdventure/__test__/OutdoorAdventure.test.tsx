import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OutdoorAdventure from "../OutdoorAdventure";

describe("OutdoorAdventure component", () => {
  it("OutdoorAdventure should render correctly", () => {
    render(<OutdoorAdventure />);
    expect(true).toBeTruthy();
  });
});

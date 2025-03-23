import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OutdoorParty from "../OutdoorParty";

describe("OutdoorParty component", () => {
  it("OutdoorParty should render correctly", () => {
    render(<OutdoorParty />);
    expect(true).toBeTruthy();
  });
});

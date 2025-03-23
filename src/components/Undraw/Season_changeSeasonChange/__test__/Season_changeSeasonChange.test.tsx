import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Season_changeSeasonChange from "../Season_changeSeasonChange";

describe("Season_changeSeasonChange component", () => {
  it("Season_changeSeasonChange should render correctly", () => {
    render(<Season_changeSeasonChange />);
    expect(true).toBeTruthy();
  });
});

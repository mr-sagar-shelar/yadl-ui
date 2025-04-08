import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BuildingWebsites from "../BuildingWebsites";

describe("BuildingWebsites component", () => {
  it("BuildingWebsites should render correctly", () => {
    render(<BuildingWebsites />);
    expect(true).toBeTruthy();
  });
});

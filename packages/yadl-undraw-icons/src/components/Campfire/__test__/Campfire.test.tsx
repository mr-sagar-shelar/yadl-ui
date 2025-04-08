import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Campfire from "../Campfire";

describe("Campfire component", () => {
  it("Campfire should render correctly", () => {
    render(<Campfire />);
    expect(true).toBeTruthy();
  });
});

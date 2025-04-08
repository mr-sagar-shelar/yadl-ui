import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HouseSearching from "../HouseSearching";

describe("HouseSearching component", () => {
  it("HouseSearching should render correctly", () => {
    render(<HouseSearching />);
    expect(true).toBeTruthy();
  });
});

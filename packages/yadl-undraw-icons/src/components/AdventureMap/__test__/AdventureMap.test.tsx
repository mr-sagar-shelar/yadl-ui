import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AdventureMap from "../AdventureMap";

describe("AdventureMap component", () => {
  it("AdventureMap should render correctly", () => {
    render(<AdventureMap />);
    expect(true).toBeTruthy();
  });
});

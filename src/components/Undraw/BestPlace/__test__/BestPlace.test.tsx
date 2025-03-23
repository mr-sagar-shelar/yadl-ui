import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BestPlace from "../BestPlace";

describe("BestPlace component", () => {
  it("BestPlace should render correctly", () => {
    render(<BestPlace />);
    expect(true).toBeTruthy();
  });
});

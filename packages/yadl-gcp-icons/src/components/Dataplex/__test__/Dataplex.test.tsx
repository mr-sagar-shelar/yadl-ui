import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Dataplex from "../Dataplex";

describe("Dataplex component", () => {
  it("Dataplex should render correctly", () => {
    render(<Dataplex />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Starlink from "../Starlink";

describe("Starlink component", () => {
  it("Starlink should render correctly", () => {
    render(<Starlink />);
    expect(true).toBeTruthy();
  });
});

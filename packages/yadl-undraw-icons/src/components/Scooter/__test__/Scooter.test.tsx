import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Scooter from "../Scooter";

describe("Scooter component", () => {
  it("Scooter should render correctly", () => {
    render(<Scooter />);
    expect(true).toBeTruthy();
  });
});

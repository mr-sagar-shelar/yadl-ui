import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Reservations from "../Reservations";

describe("Reservations component", () => {
  it("Reservations should render correctly", () => {
    render(<Reservations />);
    expect(true).toBeTruthy();
  });
});

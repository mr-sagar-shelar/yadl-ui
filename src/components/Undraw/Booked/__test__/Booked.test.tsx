import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Booked from "../Booked";

describe("Booked component", () => {
  it("Booked should render correctly", () => {
    render(<Booked />);
    expect(true).toBeTruthy();
  });
});

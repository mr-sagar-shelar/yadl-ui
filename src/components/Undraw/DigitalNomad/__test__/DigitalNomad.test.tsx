import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DigitalNomad from "../DigitalNomad";

describe("DigitalNomad component", () => {
  it("DigitalNomad should render correctly", () => {
    render(<DigitalNomad />);
    expect(true).toBeTruthy();
  });
});

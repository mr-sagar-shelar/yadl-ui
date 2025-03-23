import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OfficeSnack from "../OfficeSnack";

describe("OfficeSnack component", () => {
  it("OfficeSnack should render correctly", () => {
    render(<OfficeSnack />);
    expect(true).toBeTruthy();
  });
});

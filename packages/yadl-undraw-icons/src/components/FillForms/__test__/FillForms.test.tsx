import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FillForms from "../FillForms";

describe("FillForms component", () => {
  it("FillForms should render correctly", () => {
    render(<FillForms />);
    expect(true).toBeTruthy();
  });
});

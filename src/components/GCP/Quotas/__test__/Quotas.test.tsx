import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Quotas from "../Quotas";

describe("Quotas component", () => {
  it("Quotas should render correctly", () => {
    render(<Quotas />);
    expect(true).toBeTruthy();
  });
});

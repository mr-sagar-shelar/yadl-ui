import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DataShares from "../DataShares";

describe("DataShares component", () => {
  it("DataShares should render correctly", () => {
    render(<DataShares />);
    expect(true).toBeTruthy();
  });
});

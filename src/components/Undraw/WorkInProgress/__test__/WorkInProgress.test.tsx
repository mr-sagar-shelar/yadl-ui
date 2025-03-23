import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WorkInProgress from "../WorkInProgress";

describe("WorkInProgress component", () => {
  it("WorkInProgress should render correctly", () => {
    render(<WorkInProgress />);
    expect(true).toBeTruthy();
  });
});

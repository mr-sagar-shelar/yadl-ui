import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import InProgress from "../InProgress";

describe("InProgress component", () => {
  it("InProgress should render correctly", () => {
    render(<InProgress />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Empty from "../Empty";

describe("Empty component", () => {
  it("Empty should render correctly", () => {
    render(<Empty />);
    expect(true).toBeTruthy();
  });
});

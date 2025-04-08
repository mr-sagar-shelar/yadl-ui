import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DisksClassic from "../DisksClassic";

describe("DisksClassic component", () => {
  it("DisksClassic should render correctly", () => {
    render(<DisksClassic />);
    expect(true).toBeTruthy();
  });
});

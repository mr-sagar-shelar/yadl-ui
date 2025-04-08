import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Year2022 from "../Year2022";

describe("Year2022 component", () => {
  it("Year2022 should render correctly", () => {
    render(<Year2022 />);
    expect(true).toBeTruthy();
  });
});

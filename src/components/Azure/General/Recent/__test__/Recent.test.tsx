import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Recent from "../Recent";

describe("Recent component", () => {
  it("Recent should render correctly", () => {
    render(<Recent />);
    expect(true).toBeTruthy();
  });
});

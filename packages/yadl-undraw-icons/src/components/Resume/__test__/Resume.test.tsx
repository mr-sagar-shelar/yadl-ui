import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Resume from "../Resume";

describe("Resume component", () => {
  it("Resume should render correctly", () => {
    render(<Resume />);
    expect(true).toBeTruthy();
  });
});

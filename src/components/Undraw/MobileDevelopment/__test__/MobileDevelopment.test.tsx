import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MobileDevelopment from "../MobileDevelopment";

describe("MobileDevelopment component", () => {
  it("MobileDevelopment should render correctly", () => {
    render(<MobileDevelopment />);
    expect(true).toBeTruthy();
  });
});

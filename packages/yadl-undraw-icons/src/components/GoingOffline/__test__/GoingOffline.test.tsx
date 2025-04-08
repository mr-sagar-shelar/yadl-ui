import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GoingOffline from "../GoingOffline";

describe("GoingOffline component", () => {
  it("GoingOffline should render correctly", () => {
    render(<GoingOffline />);
    expect(true).toBeTruthy();
  });
});

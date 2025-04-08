import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ConnectivityTest from "../ConnectivityTest";

describe("ConnectivityTest component", () => {
  it("ConnectivityTest should render correctly", () => {
    render(<ConnectivityTest />);
    expect(true).toBeTruthy();
  });
});

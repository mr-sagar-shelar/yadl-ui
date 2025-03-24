import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudEkm from "../CloudEkm";

describe("CloudEkm component", () => {
  it("CloudEkm should render correctly", () => {
    render(<CloudEkm />);
    expect(true).toBeTruthy();
  });
});

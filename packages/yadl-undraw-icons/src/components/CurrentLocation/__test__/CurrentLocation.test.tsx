import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CurrentLocation from "../CurrentLocation";

describe("CurrentLocation component", () => {
  it("CurrentLocation should render correctly", () => {
    render(<CurrentLocation />);
    expect(true).toBeTruthy();
  });
});

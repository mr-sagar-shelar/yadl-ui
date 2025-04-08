import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineReading from "../OnlineReading";

describe("OnlineReading component", () => {
  it("OnlineReading should render correctly", () => {
    render(<OnlineReading />);
    expect(true).toBeTruthy();
  });
});

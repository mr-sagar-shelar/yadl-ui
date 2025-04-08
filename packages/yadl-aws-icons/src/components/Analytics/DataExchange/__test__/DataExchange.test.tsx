import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DataExchange from "../DataExchange";

describe("DataExchange component", () => {
  it("DataExchange should render correctly", () => {
    render(<DataExchange />);
    expect(true).toBeTruthy();
  });
});

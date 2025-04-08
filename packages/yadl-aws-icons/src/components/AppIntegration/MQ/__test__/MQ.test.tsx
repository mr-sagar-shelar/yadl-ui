import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MQ from "../MQ";

describe("MQ component", () => {
  it("MQ should render correctly", () => {
    render(<MQ />);
    expect(true).toBeTruthy();
  });
});

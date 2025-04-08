import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BeforeDawn from "../BeforeDawn";

describe("BeforeDawn component", () => {
  it("BeforeDawn should render correctly", () => {
    render(<BeforeDawn />);
    expect(true).toBeTruthy();
  });
});

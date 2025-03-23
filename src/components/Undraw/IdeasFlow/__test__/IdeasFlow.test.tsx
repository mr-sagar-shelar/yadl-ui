import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IdeasFlow from "../IdeasFlow";

describe("IdeasFlow component", () => {
  it("IdeasFlow should render correctly", () => {
    render(<IdeasFlow />);
    expect(true).toBeTruthy();
  });
});

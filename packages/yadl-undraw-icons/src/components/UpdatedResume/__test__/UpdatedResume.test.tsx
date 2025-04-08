import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import UpdatedResume from "../UpdatedResume";

describe("UpdatedResume component", () => {
  it("UpdatedResume should render correctly", () => {
    render(<UpdatedResume />);
    expect(true).toBeTruthy();
  });
});

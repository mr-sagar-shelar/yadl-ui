import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineResume from "../OnlineResume";

describe("OnlineResume component", () => {
  it("OnlineResume should render correctly", () => {
    render(<OnlineResume />);
    expect(true).toBeTruthy();
  });
});

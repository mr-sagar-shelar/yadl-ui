import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineBanking from "../OnlineBanking";

describe("OnlineBanking component", () => {
  it("OnlineBanking should render correctly", () => {
    render(<OnlineBanking />);
    expect(true).toBeTruthy();
  });
});

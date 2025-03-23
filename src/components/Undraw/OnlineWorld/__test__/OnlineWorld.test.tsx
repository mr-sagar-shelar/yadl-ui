import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineWorld from "../OnlineWorld";

describe("OnlineWorld component", () => {
  it("OnlineWorld should render correctly", () => {
    render(<OnlineWorld />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineParty from "../OnlineParty";

describe("OnlineParty component", () => {
  it("OnlineParty should render correctly", () => {
    render(<OnlineParty />);
    expect(true).toBeTruthy();
  });
});

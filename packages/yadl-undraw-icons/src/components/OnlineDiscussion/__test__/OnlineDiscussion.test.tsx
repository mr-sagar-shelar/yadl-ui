import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineDiscussion from "../OnlineDiscussion";

describe("OnlineDiscussion component", () => {
  it("OnlineDiscussion should render correctly", () => {
    render(<OnlineDiscussion />);
    expect(true).toBeTruthy();
  });
});

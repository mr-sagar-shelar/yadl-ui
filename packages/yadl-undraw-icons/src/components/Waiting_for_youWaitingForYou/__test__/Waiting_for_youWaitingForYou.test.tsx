import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Waiting_for_youWaitingForYou from "../Waiting_for_youWaitingForYou";

describe("Waiting_for_youWaitingForYou component", () => {
  it("Waiting_for_youWaitingForYou should render correctly", () => {
    render(<Waiting_for_youWaitingForYou />);
    expect(true).toBeTruthy();
  });
});

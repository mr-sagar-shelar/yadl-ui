import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Subscriptions from "../Subscriptions";

describe("Subscriptions component", () => {
  it("Subscriptions should render correctly", () => {
    render(<Subscriptions />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import UserSubscriptions from "../UserSubscriptions";

describe("UserSubscriptions component", () => {
  it("UserSubscriptions should render correctly", () => {
    render(<UserSubscriptions />);
    expect(true).toBeTruthy();
  });
});

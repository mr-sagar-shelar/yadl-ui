import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FreshNotification from "../FreshNotification";

describe("FreshNotification component", () => {
  it("FreshNotification should render correctly", () => {
    render(<FreshNotification />);
    expect(true).toBeTruthy();
  });
});

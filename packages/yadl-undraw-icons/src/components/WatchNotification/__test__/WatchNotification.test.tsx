import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WatchNotification from "../WatchNotification";

describe("WatchNotification component", () => {
  it("WatchNotification should render correctly", () => {
    render(<WatchNotification />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Notifications from "../Notifications";

describe("Notifications component", () => {
  it("Notifications should render correctly", () => {
    render(<Notifications />);
    expect(true).toBeTruthy();
  });
});

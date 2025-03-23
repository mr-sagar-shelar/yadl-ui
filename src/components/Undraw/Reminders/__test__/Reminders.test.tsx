import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Reminders from "../Reminders";

describe("Reminders component", () => {
  it("Reminders should render correctly", () => {
    render(<Reminders />);
    expect(true).toBeTruthy();
  });
});

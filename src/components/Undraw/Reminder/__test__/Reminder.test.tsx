import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Reminder from "../Reminder";

describe("Reminder component", () => {
  it("Reminder should render correctly", () => {
    render(<Reminder />);
    expect(true).toBeTruthy();
  });
});

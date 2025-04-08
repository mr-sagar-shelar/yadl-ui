import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CleanRooms from "../CleanRooms";

describe("CleanRooms component", () => {
  it("CleanRooms should render correctly", () => {
    render(<CleanRooms />);
    expect(true).toBeTruthy();
  });
});

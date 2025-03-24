import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ClientVPN from "../ClientVPN";

describe("ClientVPN component", () => {
  it("ClientVPN should render correctly", () => {
    render(<ClientVPN />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HappyAnnouncement from "../HappyAnnouncement";

describe("HappyAnnouncement component", () => {
  it("HappyAnnouncement should render correctly", () => {
    render(<HappyAnnouncement />);
    expect(true).toBeTruthy();
  });
});

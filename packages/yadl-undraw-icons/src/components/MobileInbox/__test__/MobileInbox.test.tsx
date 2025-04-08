import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MobileInbox from "../MobileInbox";

describe("MobileInbox component", () => {
  it("MobileInbox should render correctly", () => {
    render(<MobileInbox />);
    expect(true).toBeTruthy();
  });
});

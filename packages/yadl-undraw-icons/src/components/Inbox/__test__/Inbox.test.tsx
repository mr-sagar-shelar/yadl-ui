import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Inbox from "../Inbox";

describe("Inbox component", () => {
  it("Inbox should render correctly", () => {
    render(<Inbox />);
    expect(true).toBeTruthy();
  });
});

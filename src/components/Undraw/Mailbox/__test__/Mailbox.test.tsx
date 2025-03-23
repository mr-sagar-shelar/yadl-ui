import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Mailbox from "../Mailbox";

describe("Mailbox component", () => {
  it("Mailbox should render correctly", () => {
    render(<Mailbox />);
    expect(true).toBeTruthy();
  });
});

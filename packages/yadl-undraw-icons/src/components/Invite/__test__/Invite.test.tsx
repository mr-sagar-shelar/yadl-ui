import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Invite from "../Invite";

describe("Invite component", () => {
  it("Invite should render correctly", () => {
    render(<Invite />);
    expect(true).toBeTruthy();
  });
});

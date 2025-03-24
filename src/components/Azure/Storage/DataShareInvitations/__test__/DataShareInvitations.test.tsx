import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DataShareInvitations from "../DataShareInvitations";

describe("DataShareInvitations component", () => {
  it("DataShareInvitations should render correctly", () => {
    render(<DataShareInvitations />);
    expect(true).toBeTruthy();
  });
});

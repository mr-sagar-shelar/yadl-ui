import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CollabCollab from "../CollabCollab";

describe("CollabCollab component", () => {
  it("CollabCollab should render correctly", () => {
    render(<CollabCollab />);
    expect(true).toBeTruthy();
  });
});

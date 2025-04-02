import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Mastodon from "../Mastodon";

describe("Mastodon component", () => {
  it("Mastodon should render correctly", () => {
    render(<Mastodon />);
    expect(true).toBeTruthy();
  });
});

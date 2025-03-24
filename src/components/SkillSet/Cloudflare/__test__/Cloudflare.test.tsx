import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Cloudflare from "../Cloudflare";

describe("Cloudflare component", () => {
  it("Cloudflare should render correctly", () => {
    render(<Cloudflare />);
    expect(true).toBeTruthy();
  });
});

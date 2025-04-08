import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PrivateLinkService from "../PrivateLinkService";

describe("PrivateLinkService component", () => {
  it("PrivateLinkService should render correctly", () => {
    render(<PrivateLinkService />);
    expect(true).toBeTruthy();
  });
});

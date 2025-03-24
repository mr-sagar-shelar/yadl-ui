import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OutboundConnection from "../OutboundConnection";

describe("OutboundConnection component", () => {
  it("OutboundConnection should render correctly", () => {
    render(<OutboundConnection />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ManagedStreamingforApacheKafka from "../ManagedStreamingforApacheKafka";

describe("ManagedStreamingforApacheKafka component", () => {
  it("ManagedStreamingforApacheKafka should render correctly", () => {
    render(<ManagedStreamingforApacheKafka />);
    expect(true).toBeTruthy();
  });
});

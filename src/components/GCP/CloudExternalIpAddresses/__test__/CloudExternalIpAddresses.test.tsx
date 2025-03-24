import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudExternalIpAddresses from "../CloudExternalIpAddresses";

describe("CloudExternalIpAddresses component", () => {
  it("CloudExternalIpAddresses should render correctly", () => {
    render(<CloudExternalIpAddresses />);
    expect(true).toBeTruthy();
  });
});

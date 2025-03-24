import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IPAddressmanager from "../IPAddressmanager";

describe("IPAddressmanager component", () => {
  it("IPAddressmanager should render correctly", () => {
    render(<IPAddressmanager />);
    expect(true).toBeTruthy();
  });
});

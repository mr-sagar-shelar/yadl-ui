import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PrivateLinkServices from "../PrivateLinkServices";

describe("PrivateLinkServices component", () => {
  it("PrivateLinkServices should render correctly", () => {
    render(<PrivateLinkServices />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureFirewallManager from "../AzureFirewallManager";

describe("AzureFirewallManager component", () => {
  it("AzureFirewallManager should render correctly", () => {
    render(<AzureFirewallManager />);
    expect(true).toBeTruthy();
  });
});

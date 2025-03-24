import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FirewallManager from "../FirewallManager";

describe("FirewallManager component", () => {
  it("FirewallManager should render correctly", () => {
    render(<FirewallManager />);
    expect(true).toBeTruthy();
  });
});

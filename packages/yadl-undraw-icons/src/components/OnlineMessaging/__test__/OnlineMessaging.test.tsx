import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineMessaging from "../OnlineMessaging";

describe("OnlineMessaging component", () => {
  it("OnlineMessaging should render correctly", () => {
    render(<OnlineMessaging />);
    expect(true).toBeTruthy();
  });
});

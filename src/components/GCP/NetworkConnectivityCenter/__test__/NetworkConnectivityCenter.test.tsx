import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NetworkConnectivityCenter from "../NetworkConnectivityCenter";

describe("NetworkConnectivityCenter component", () => {
  it("NetworkConnectivityCenter should render correctly", () => {
    render(<NetworkConnectivityCenter />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RemoteDesignTeam from "../RemoteDesignTeam";

describe("RemoteDesignTeam component", () => {
  it("RemoteDesignTeam should render correctly", () => {
    render(<RemoteDesignTeam />);
    expect(true).toBeTruthy();
  });
});

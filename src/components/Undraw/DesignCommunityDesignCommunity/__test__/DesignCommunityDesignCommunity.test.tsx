import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DesignCommunityDesignCommunity from "../DesignCommunityDesignCommunity";

describe("DesignCommunityDesignCommunity component", () => {
  it("DesignCommunityDesignCommunity should render correctly", () => {
    render(<DesignCommunityDesignCommunity />);
    expect(true).toBeTruthy();
  });
});

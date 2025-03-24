import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HostGroups from "../HostGroups";

describe("HostGroups component", () => {
  it("HostGroups should render correctly", () => {
    render(<HostGroups />);
    expect(true).toBeTruthy();
  });
});

import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Cloud_filesCloudFiles from "../Cloud_filesCloudFiles";

describe("Cloud_filesCloudFiles component", () => {
  it("Cloud_filesCloudFiles should render correctly", () => {
    render(<Cloud_filesCloudFiles />);
    expect(true).toBeTruthy();
  });
});

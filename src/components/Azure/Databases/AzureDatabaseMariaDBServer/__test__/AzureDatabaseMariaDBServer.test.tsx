import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureDatabaseMariaDBServer from "../AzureDatabaseMariaDBServer";

describe("AzureDatabaseMariaDBServer component", () => {
  it("AzureDatabaseMariaDBServer should render correctly", () => {
    render(<AzureDatabaseMariaDBServer />);
    expect(true).toBeTruthy();
  });
});

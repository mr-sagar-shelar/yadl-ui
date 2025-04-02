import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RabbitMQ from "../RabbitMQ";

describe("RabbitMQ component", () => {
  it("RabbitMQ should render correctly", () => {
    render(<RabbitMQ />);
    expect(true).toBeTruthy();
  });
});

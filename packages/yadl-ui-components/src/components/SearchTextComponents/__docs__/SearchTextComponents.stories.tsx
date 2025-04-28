import type { Meta, StoryObj } from "@storybook/react";
import SearchTextComponents from "../SearchTextComponents";
import React from "react";

const meta: Meta<typeof SearchTextComponents> = { title: "Search/SearchTextComponents", component: SearchTextComponents };

export default meta;
type Story = StoryObj<typeof SearchTextComponents>;

export const Primary: Story = {
  args: {
  },
  render: (args) => (
    <div style={{ height: "100%", width: "100%", overflow: "visible" }}>
      <SearchTextComponents />
    </div>
  ),
};

import type { Meta, StoryObj } from "@storybook/react";
import StorageGateway from "../StorageGateway";

const meta: Meta<typeof StorageGateway> = { title: "AWS/Storage/StorageGateway", component: StorageGateway };

export default meta;
type Story = StoryObj<typeof StorageGateway>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

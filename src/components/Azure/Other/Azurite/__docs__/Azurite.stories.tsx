import type { Meta, StoryObj } from "@storybook/react";
import Azurite from "../Azurite";

const meta: Meta<typeof Azurite> = { title: "Azure/Other/Azurite", component: Azurite };

export default meta;
type Story = StoryObj<typeof Azurite>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

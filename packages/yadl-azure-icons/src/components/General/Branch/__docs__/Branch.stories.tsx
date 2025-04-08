import type { Meta, StoryObj } from "@storybook/react";
import Branch from "../Branch";

const meta: Meta<typeof Branch> = { title: "Azure/General/Branch", component: Branch };

export default meta;
type Story = StoryObj<typeof Branch>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

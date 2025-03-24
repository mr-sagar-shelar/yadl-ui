import type { Meta, StoryObj } from "@storybook/react";
import Commit from "../Commit";

const meta: Meta<typeof Commit> = { title: "Azure/General/Commit", component: Commit };

export default meta;
type Story = StoryObj<typeof Commit>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

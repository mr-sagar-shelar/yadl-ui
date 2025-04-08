import type { Meta, StoryObj } from "@storybook/react";
import Backup from "../Backup";

const meta: Meta<typeof Backup> = { title: "AWS/Storage/Backup", component: Backup };

export default meta;
type Story = StoryObj<typeof Backup>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

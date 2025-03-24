import type { Meta, StoryObj } from "@storybook/react";
import LocalZones from "../LocalZones";

const meta: Meta<typeof LocalZones> = { title: "AWS/Compute/LocalZones", component: LocalZones };

export default meta;
type Story = StoryObj<typeof LocalZones>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

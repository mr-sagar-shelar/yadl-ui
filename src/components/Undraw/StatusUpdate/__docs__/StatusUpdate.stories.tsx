import type { Meta, StoryObj } from "@storybook/react";
import StatusUpdate from "../StatusUpdate";

const meta: Meta<typeof StatusUpdate> = { title: "unDraw/StatusUpdate", component: StatusUpdate };

export default meta;
type Story = StoryObj<typeof StatusUpdate>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

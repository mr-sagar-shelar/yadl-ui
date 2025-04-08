import type { Meta, StoryObj } from "@storybook/react";
import ServerStatus from "../ServerStatus";

const meta: Meta<typeof ServerStatus> = { title: "unDraw/ServerStatus", component: ServerStatus };

export default meta;
type Story = StoryObj<typeof ServerStatus>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

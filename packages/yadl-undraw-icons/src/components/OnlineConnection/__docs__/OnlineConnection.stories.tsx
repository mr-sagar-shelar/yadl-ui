import type { Meta, StoryObj } from "@storybook/react";
import OnlineConnection from "../OnlineConnection";

const meta: Meta<typeof OnlineConnection> = { title: "unDraw/OnlineConnection", component: OnlineConnection };

export default meta;
type Story = StoryObj<typeof OnlineConnection>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

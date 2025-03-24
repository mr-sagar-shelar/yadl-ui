import type { Meta, StoryObj } from "@storybook/react";
import Connection from "../Connection";

const meta: Meta<typeof Connection> = { title: "unDraw/Connection", component: Connection };

export default meta;
type Story = StoryObj<typeof Connection>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

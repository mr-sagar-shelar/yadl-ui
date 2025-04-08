import type { Meta, StoryObj } from "@storybook/react";
import Server from "../Server";

const meta: Meta<typeof Server> = { title: "unDraw/Server", component: Server };

export default meta;
type Story = StoryObj<typeof Server>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

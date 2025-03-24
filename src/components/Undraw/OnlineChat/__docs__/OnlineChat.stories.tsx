import type { Meta, StoryObj } from "@storybook/react";
import OnlineChat from "../OnlineChat";

const meta: Meta<typeof OnlineChat> = { title: "unDraw/OnlineChat", component: OnlineChat };

export default meta;
type Story = StoryObj<typeof OnlineChat>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

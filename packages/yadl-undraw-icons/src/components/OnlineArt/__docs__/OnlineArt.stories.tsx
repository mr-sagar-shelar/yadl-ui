import type { Meta, StoryObj } from "@storybook/react";
import OnlineArt from "../OnlineArt";

const meta: Meta<typeof OnlineArt> = { title: "unDraw/OnlineArt", component: OnlineArt };

export default meta;
type Story = StoryObj<typeof OnlineArt>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

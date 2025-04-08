import type { Meta, StoryObj } from "@storybook/react";
import OnlineAd from "../OnlineAd";

const meta: Meta<typeof OnlineAd> = { title: "unDraw/OnlineAd", component: OnlineAd };

export default meta;
type Story = StoryObj<typeof OnlineAd>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

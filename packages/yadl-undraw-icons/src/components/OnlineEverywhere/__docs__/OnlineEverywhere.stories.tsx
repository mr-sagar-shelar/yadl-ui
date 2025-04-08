import type { Meta, StoryObj } from "@storybook/react";
import OnlineEverywhere from "../OnlineEverywhere";

const meta: Meta<typeof OnlineEverywhere> = { title: "unDraw/OnlineEverywhere", component: OnlineEverywhere };

export default meta;
type Story = StoryObj<typeof OnlineEverywhere>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

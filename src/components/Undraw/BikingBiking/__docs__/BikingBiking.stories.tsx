import type { Meta, StoryObj } from "@storybook/react";
import BikingBiking from "../BikingBiking";

const meta: Meta<typeof BikingBiking> = { title: "unDraw/BikingBiking", component: BikingBiking };

export default meta;
type Story = StoryObj<typeof BikingBiking>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

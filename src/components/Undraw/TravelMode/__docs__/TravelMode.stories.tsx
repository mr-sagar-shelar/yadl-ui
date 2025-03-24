import type { Meta, StoryObj } from "@storybook/react";
import TravelMode from "../TravelMode";

const meta: Meta<typeof TravelMode> = { title: "unDraw/TravelMode", component: TravelMode };

export default meta;
type Story = StoryObj<typeof TravelMode>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

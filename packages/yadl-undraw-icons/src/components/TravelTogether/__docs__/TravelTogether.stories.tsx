import type { Meta, StoryObj } from "@storybook/react";
import TravelTogether from "../TravelTogether";

const meta: Meta<typeof TravelTogether> = { title: "unDraw/TravelTogether", component: TravelTogether };

export default meta;
type Story = StoryObj<typeof TravelTogether>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

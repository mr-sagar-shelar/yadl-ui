import type { Meta, StoryObj } from "@storybook/react";
import TravelPlans from "../TravelPlans";

const meta: Meta<typeof TravelPlans> = { title: "unDraw/TravelPlans", component: TravelPlans };

export default meta;
type Story = StoryObj<typeof TravelPlans>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

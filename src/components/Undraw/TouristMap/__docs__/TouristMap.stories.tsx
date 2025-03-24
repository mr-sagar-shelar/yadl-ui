import type { Meta, StoryObj } from "@storybook/react";
import TouristMap from "../TouristMap";

const meta: Meta<typeof TouristMap> = { title: "unDraw/TouristMap", component: TouristMap };

export default meta;
type Story = StoryObj<typeof TouristMap>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

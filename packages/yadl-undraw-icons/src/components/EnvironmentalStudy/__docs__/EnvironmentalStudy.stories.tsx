import type { Meta, StoryObj } from "@storybook/react";
import EnvironmentalStudy from "../EnvironmentalStudy";

const meta: Meta<typeof EnvironmentalStudy> = { title: "unDraw/EnvironmentalStudy", component: EnvironmentalStudy };

export default meta;
type Story = StoryObj<typeof EnvironmentalStudy>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

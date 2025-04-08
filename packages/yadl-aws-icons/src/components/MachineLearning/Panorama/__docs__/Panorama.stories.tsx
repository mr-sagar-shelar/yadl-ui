import type { Meta, StoryObj } from "@storybook/react";
import Panorama from "../Panorama";

const meta: Meta<typeof Panorama> = { title: "AWS/MachineLearning/Panorama", component: Panorama };

export default meta;
type Story = StoryObj<typeof Panorama>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

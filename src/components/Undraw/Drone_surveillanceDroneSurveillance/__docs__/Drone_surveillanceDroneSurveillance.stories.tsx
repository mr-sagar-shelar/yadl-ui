import type { Meta, StoryObj } from "@storybook/react";
import Drone_surveillanceDroneSurveillance from "../Drone_surveillanceDroneSurveillance";

const meta: Meta<typeof Drone_surveillanceDroneSurveillance> = { title: "unDraw/Drone_surveillanceDroneSurveillance", component: Drone_surveillanceDroneSurveillance };

export default meta;
type Story = StoryObj<typeof Drone_surveillanceDroneSurveillance>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

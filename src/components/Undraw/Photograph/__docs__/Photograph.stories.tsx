import type { Meta, StoryObj } from "@storybook/react";
import Photograph from "../Photograph";

const meta: Meta<typeof Photograph> = { title: "unDraw/Photograph", component: Photograph };

export default meta;
type Story = StoryObj<typeof Photograph>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

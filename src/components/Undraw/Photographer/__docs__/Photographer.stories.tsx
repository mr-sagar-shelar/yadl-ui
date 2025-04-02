import type { Meta, StoryObj } from "@storybook/react";
import Photographer from "../Photographer";

const meta: Meta<typeof Photographer> = { title: "unDraw/Photographer", component: Photographer };

export default meta;
type Story = StoryObj<typeof Photographer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

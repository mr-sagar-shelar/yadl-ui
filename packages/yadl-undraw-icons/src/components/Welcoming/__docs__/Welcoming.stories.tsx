import type { Meta, StoryObj } from "@storybook/react";
import Welcoming from "../Welcoming";

const meta: Meta<typeof Welcoming> = { title: "unDraw/Welcoming", component: Welcoming };

export default meta;
type Story = StoryObj<typeof Welcoming>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

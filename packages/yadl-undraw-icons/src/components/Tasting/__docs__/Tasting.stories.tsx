import type { Meta, StoryObj } from "@storybook/react";
import Tasting from "../Tasting";

const meta: Meta<typeof Tasting> = { title: "unDraw/Tasting", component: Tasting };

export default meta;
type Story = StoryObj<typeof Tasting>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

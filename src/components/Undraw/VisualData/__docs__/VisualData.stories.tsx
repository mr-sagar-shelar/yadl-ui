import type { Meta, StoryObj } from "@storybook/react";
import VisualData from "../VisualData";

const meta: Meta<typeof VisualData> = { title: "unDraw/VisualData", component: VisualData };

export default meta;
type Story = StoryObj<typeof VisualData>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

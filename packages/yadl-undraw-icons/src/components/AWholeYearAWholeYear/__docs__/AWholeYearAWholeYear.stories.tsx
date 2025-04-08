import type { Meta, StoryObj } from "@storybook/react";
import AWholeYearAWholeYear from "../AWholeYearAWholeYear";

const meta: Meta<typeof AWholeYearAWholeYear> = { title: "unDraw/AWholeYearAWholeYear", component: AWholeYearAWholeYear };

export default meta;
type Story = StoryObj<typeof AWholeYearAWholeYear>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

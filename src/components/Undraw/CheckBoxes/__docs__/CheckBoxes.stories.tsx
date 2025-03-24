import type { Meta, StoryObj } from "@storybook/react";
import CheckBoxes from "../CheckBoxes";

const meta: Meta<typeof CheckBoxes> = { title: "unDraw/CheckBoxes", component: CheckBoxes };

export default meta;
type Story = StoryObj<typeof CheckBoxes>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

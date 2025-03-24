import type { Meta, StoryObj } from "@storybook/react";
import CheckingBoxes from "../CheckingBoxes";

const meta: Meta<typeof CheckingBoxes> = { title: "unDraw/CheckingBoxes", component: CheckingBoxes };

export default meta;
type Story = StoryObj<typeof CheckingBoxes>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

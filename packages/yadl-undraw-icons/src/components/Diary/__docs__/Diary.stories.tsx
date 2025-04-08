import type { Meta, StoryObj } from "@storybook/react";
import Diary from "../Diary";

const meta: Meta<typeof Diary> = { title: "unDraw/Diary", component: Diary };

export default meta;
type Story = StoryObj<typeof Diary>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

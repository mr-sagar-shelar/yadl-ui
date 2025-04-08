import type { Meta, StoryObj } from "@storybook/react";
import AppData from "../AppData";

const meta: Meta<typeof AppData> = { title: "unDraw/AppData", component: AppData };

export default meta;
type Story = StoryObj<typeof AppData>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

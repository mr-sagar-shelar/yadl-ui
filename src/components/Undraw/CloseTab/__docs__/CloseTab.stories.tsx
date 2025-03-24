import type { Meta, StoryObj } from "@storybook/react";
import CloseTab from "../CloseTab";

const meta: Meta<typeof CloseTab> = { title: "unDraw/CloseTab", component: CloseTab };

export default meta;
type Story = StoryObj<typeof CloseTab>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

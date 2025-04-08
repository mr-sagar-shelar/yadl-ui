import type { Meta, StoryObj } from "@storybook/react";
import ChoreList from "../ChoreList";

const meta: Meta<typeof ChoreList> = { title: "unDraw/ChoreList", component: ChoreList };

export default meta;
type Story = StoryObj<typeof ChoreList>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

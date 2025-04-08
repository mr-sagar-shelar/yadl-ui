import type { Meta, StoryObj } from "@storybook/react";
import SpreadLove from "../SpreadLove";

const meta: Meta<typeof SpreadLove> = { title: "unDraw/SpreadLove", component: SpreadLove };

export default meta;
type Story = StoryObj<typeof SpreadLove>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

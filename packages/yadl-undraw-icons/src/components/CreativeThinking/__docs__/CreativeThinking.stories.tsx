import type { Meta, StoryObj } from "@storybook/react";
import CreativeThinking from "../CreativeThinking";

const meta: Meta<typeof CreativeThinking> = { title: "unDraw/CreativeThinking", component: CreativeThinking };

export default meta;
type Story = StoryObj<typeof CreativeThinking>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

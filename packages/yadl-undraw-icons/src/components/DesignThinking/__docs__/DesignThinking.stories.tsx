import type { Meta, StoryObj } from "@storybook/react";
import DesignThinking from "../DesignThinking";

const meta: Meta<typeof DesignThinking> = { title: "unDraw/DesignThinking", component: DesignThinking };

export default meta;
type Story = StoryObj<typeof DesignThinking>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

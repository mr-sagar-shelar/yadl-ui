import type { Meta, StoryObj } from "@storybook/react";
import Mention from "../Mention";

const meta: Meta<typeof Mention> = { title: "unDraw/Mention", component: Mention };

export default meta;
type Story = StoryObj<typeof Mention>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

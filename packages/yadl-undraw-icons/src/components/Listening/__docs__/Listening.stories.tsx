import type { Meta, StoryObj } from "@storybook/react";
import Listening from "../Listening";

const meta: Meta<typeof Listening> = { title: "unDraw/Listening", component: Listening };

export default meta;
type Story = StoryObj<typeof Listening>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

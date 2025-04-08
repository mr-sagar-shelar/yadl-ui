import type { Meta, StoryObj } from "@storybook/react";
import Towing from "../Towing";

const meta: Meta<typeof Towing> = { title: "unDraw/Towing", component: Towing };

export default meta;
type Story = StoryObj<typeof Towing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

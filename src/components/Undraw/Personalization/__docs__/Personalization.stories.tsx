import type { Meta, StoryObj } from "@storybook/react";
import Personalization from "../Personalization";

const meta: Meta<typeof Personalization> = { title: "unDraw/Personalization", component: Personalization };

export default meta;
type Story = StoryObj<typeof Personalization>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

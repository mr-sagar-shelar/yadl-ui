import type { Meta, StoryObj } from "@storybook/react";
import Faq from "../Faq";

const meta: Meta<typeof Faq> = { title: "unDraw/Faq", component: Faq };

export default meta;
type Story = StoryObj<typeof Faq>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

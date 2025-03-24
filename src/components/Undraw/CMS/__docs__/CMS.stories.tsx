import type { Meta, StoryObj } from "@storybook/react";
import CMS from "../CMS";

const meta: Meta<typeof CMS> = { title: "unDraw/CMS", component: CMS };

export default meta;
type Story = StoryObj<typeof CMS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

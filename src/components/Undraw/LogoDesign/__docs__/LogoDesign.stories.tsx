import type { Meta, StoryObj } from "@storybook/react";
import LogoDesign from "../LogoDesign";

const meta: Meta<typeof LogoDesign> = { title: "unDraw/LogoDesign", component: LogoDesign };

export default meta;
type Story = StoryObj<typeof LogoDesign>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

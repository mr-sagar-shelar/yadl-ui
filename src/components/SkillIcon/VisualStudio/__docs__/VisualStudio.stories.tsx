import type { Meta, StoryObj } from "@storybook/react";
import VisualStudio from "../VisualStudio";

const meta: Meta<typeof VisualStudio> = { title: "SkillIcon/VisualStudio", component: VisualStudio };

export default meta;
type Story = StoryObj<typeof VisualStudio>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

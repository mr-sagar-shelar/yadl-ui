import type { Meta, StoryObj } from "@storybook/react";
import RobloxStudio from "../RobloxStudio";

const meta: Meta<typeof RobloxStudio> = { title: "SkillIcon/RobloxStudio", component: RobloxStudio };

export default meta;
type Story = StoryObj<typeof RobloxStudio>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

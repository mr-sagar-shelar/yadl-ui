import type { Meta, StoryObj } from "@storybook/react";
import NuxtJS from "../NuxtJS";

const meta: Meta<typeof NuxtJS> = { title: "SkillIcon/NuxtJS", component: NuxtJS };

export default meta;
type Story = StoryObj<typeof NuxtJS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

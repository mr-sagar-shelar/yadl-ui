import type { Meta, StoryObj } from "@storybook/react";
import AndroidStudio from "../AndroidStudio";

const meta: Meta<typeof AndroidStudio> = { title: "SkillIcon/AndroidStudio", component: AndroidStudio };

export default meta;
type Story = StoryObj<typeof AndroidStudio>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

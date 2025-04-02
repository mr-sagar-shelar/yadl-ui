import type { Meta, StoryObj } from "@storybook/react";
import Kotlin from "../Kotlin";

const meta: Meta<typeof Kotlin> = { title: "SkillIcon/Kotlin", component: Kotlin };

export default meta;
type Story = StoryObj<typeof Kotlin>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

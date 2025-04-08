import type { Meta, StoryObj } from "@storybook/react";
import Gradle from "../Gradle";

const meta: Meta<typeof Gradle> = { title: "SkillIcon/Gradle", component: Gradle };

export default meta;
type Story = StoryObj<typeof Gradle>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

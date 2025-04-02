import type { Meta, StoryObj } from "@storybook/react";
import Emotion from "../Emotion";

const meta: Meta<typeof Emotion> = { title: "SkillIcon/Emotion", component: Emotion };

export default meta;
type Story = StoryObj<typeof Emotion>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

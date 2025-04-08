import type { Meta, StoryObj } from "@storybook/react";
import TutorialVideo from "../TutorialVideo";

const meta: Meta<typeof TutorialVideo> = { title: "unDraw/TutorialVideo", component: TutorialVideo };

export default meta;
type Story = StoryObj<typeof TutorialVideo>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

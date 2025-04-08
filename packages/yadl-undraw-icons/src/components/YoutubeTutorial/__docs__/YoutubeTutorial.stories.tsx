import type { Meta, StoryObj } from "@storybook/react";
import YoutubeTutorial from "../YoutubeTutorial";

const meta: Meta<typeof YoutubeTutorial> = { title: "unDraw/YoutubeTutorial", component: YoutubeTutorial };

export default meta;
type Story = StoryObj<typeof YoutubeTutorial>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};

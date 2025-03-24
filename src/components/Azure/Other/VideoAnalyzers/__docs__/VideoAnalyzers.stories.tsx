import type { Meta, StoryObj } from "@storybook/react";
import VideoAnalyzers from "../VideoAnalyzers";

const meta: Meta<typeof VideoAnalyzers> = { title: "Azure/Other/VideoAnalyzers", component: VideoAnalyzers };

export default meta;
type Story = StoryObj<typeof VideoAnalyzers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
